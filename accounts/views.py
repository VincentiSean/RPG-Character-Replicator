# accounts/views.py
import uuid

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from django.urls import reverse_lazy
from django.views import generic
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import render, redirect
from .forms import RegistrationForm, RaceForm, PathForm, StatsForm, BackgroundForm, EquipmentForm, TraitsForm
from .models import Character
from .findModifier import getModifier
from .findSkill import findSkill


def home(request):
    userID = request.user.id
    characterNames = []
    characterLevels = []
    characterRaces = []
    characterClasses = []
    characterIDs = []
    request.session['hasCharacters'] = 1
    
    #   IF USER HAS CHARACTERS GET CHARACTER NAME/LEVEL/RACE/CLASS  #
    if (Character.objects.filter(userID = userID)):
        characters = Character.objects.filter(userID = userID)
        for characterName in characters.values_list('character_name'):
            characterNames.append(characterName[0])
        for characterLevel in characters.values_list('character_level'):
            characterLevels.append(characterLevel[0])
        for characterRace in characters.values_list('character_race'):
            characterRaces.append(characterRace[0])
        for characterClass in characters.values_list('character_class'):
            characterClasses.append(characterClass[0])
        for characterID in characters.values_list('id'):
            characterIDs.append(characterID[0])
        
        request.session['allCharacters'] = []
        for x in range(len(characterNames)):
            request.session['allCharacters'].append({
                "name": characterNames[x],
                "level": characterLevels[x],
                "race": characterRaces[x],
                "class": characterClasses[x],
                "id": characterIDs[x]
            })

    else:
        request.session['characterNames'] = 'None'

    if request.method == "POST":
        characterID = request.POST.get('charID')
        print(characterID)
        request.session['characterSheetID'] = characterID
        return redirect("character")
    return render(request = request,
                template_name = "home.html")

def register(request):
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect("home")
    else:
        form = RegistrationForm()
    return render(request = request,
                template_name = "signup.html",
                context={"form":form})


def race(request):
    if request.method == "POST":
        form = RaceForm(request.POST)
        if form.is_valid():
            user_id = request.user.id
            race = form.cleaned_data.get('character_race')
            classy = form.cleaned_data.get('character_class')
            raceBonus = request.POST.get('racialBonus')
            speedNum = request.POST.get('speedNum')
            print("Speed: " + str(speedNum))
            hitpointStart = request.POST.get('hitpoints')
            savingThrows = request.POST.get('savingThrows')
            spellCastingAbility = request.POST.get('spellCastingAbility')

            #   GET ABILITIES AND STORE THEM   #
            skillProfs = []
            for profs in request.POST.getlist('skillProfs'):
                skillProfs.append(profs)

            abilityList = request.POST.get('abilities').split(':')

            #   GET SENSES FROM ABILITIES AND STORE SEPARATELY  #
            senses = []
            if 'Darkvision' in abilityList:
                senses.append(':Darkvision 60 ft.')
            elif 'Truesight' in abilityList:
                senses.append(':Truesight')
            elif 'Blindsight' in abilityList:
                senses.append(':Blindsight')
            elif 'Tremorsense' in abilityList:
                senses.append(':Tremorsense')
            
            #   GET ARMOR/WEAPON/TOOLS/LANGAUGES PROFICIENCIES AND STORE THEM   #
            classProfs = request.POST.get('classProfsList').split(":")
            languages = request.POST.get('langList')
            
            armor = classProfs[0]
            weapons = classProfs[1]
            tools = classProfs[2]

            charAuth = authenticate(character_race=race, 
                                    character_class=classy, 
                                    race_bonus=raceBonus, 
                                    speed_num=speedNum, 
                                    hitpoint_start=hitpointStart, 
                                    saving_throws=savingThrows, 
                                    spell_casting_ability=spellCastingAbility, 
                                    skillProfs=skillProfs, 
                                    senses=senses,
                                    armor=armor,
                                    weapons=weapons,
                                    tools=tools,
                                    languages=languages)

            request.session['race_id'] = race
            request.session['class_id'] = classy
            request.session['race_bonus'] = raceBonus
            request.session['speed_num'] = speedNum
            request.session['hitpoint_start'] = hitpointStart
            request.session['saving_throws'] = savingThrows
            request.session['spell_casting_ability'] = spellCastingAbility
            request.session['skillProfs'] = skillProfs
            request.session['senses'] = senses
            request.session['armor'] = armor
            request.session['weapons'] = weapons
            request.session['tools'] = tools
            request.session['languages'] = languages
            request.session['user_id'] = user_id
            return redirect("classSpecifics")
    else: 
        form = RaceForm
    return render(request = request,
                template_name = 'race.html',
                context={"form":form})

def classSpecifics(request):
    if request.method == "POST":
        form = PathForm(request.POST)
        if form.is_valid():
            pathValue = form.cleaned_data.get("pathValue")
            request.session['class_path'] = pathValue
            return redirect("stats")
    else:
        form = PathForm
    return render(request = request,
                template_name = 'classSpecifics.html')

def stats(request):
    if request.method == "POST":
        form = StatsForm(request.POST)
        if form.is_valid():
            strength = form.cleaned_data.get('strength')
            dexterity = form.cleaned_data.get('dexterity')
            constitution = form.cleaned_data.get('constitution')
            intelligence = form.cleaned_data.get('intelligence')
            wisdom = form.cleaned_data.get('wisdom')
            charisma = form.cleaned_data.get('charisma')

            request.session['strength'] = strength
            request.session['dexterity'] = dexterity
            request.session['constitution'] = constitution
            request.session['intelligence'] = intelligence
            request.session['wisdom'] = wisdom
            request.session['charisma'] = charisma
            # request.session['strTotal'] = request.POST.get('strTotal')
            return redirect("backgrounds")
    else:
        form = StatsForm
    return render(request = request,
        template_name = 'stats.html',
                context={"form":form})

def backgrounds(request):
    if request.method == "POST":
        form = BackgroundForm(request.POST)
        if form.is_valid():
            background = form.cleaned_data.get('character_background')
            gold = request.POST.get('gold')
            charAuth = authenticate(character_background=background, gold=gold)
            request.session['character_background'] = background
            request.session['gold'] = gold
            return redirect("traits")
    else: 
        form = BackgroundForm
    return render(request = request,
                template_name = 'backgrounds.html',
                context={"form":form})

def equipment(request):
    if request.method == "POST":
        form = EquipmentForm(request.POST)
        if form.is_valid():
            return redirect("equipment")
    else: 
        form = EquipmentForm
    return render(request = request,
                template_name = 'equipment.html',
                context={"form":form})

def traits(request):
    if request.method == "POST":
        form = TraitsForm(request.POST)
        if form.is_valid():
            #   INITIALIZE  VARIABLES   #
            strRacial = 0
            strThrow = False
            dexRacial = 0
            dexThrow = False
            conRacial = 0
            conThrow = False
            intRacial = 0
            intThrow = False
            wisRacial = 0
            wisThrow = False
            charRacial = 0
            charThrow = False
            acrobaticsProf = False
            animalHandlingProf = False
            arcanaProf = False
            athleticsProf = False
            deceptionProf = False
            historyProf = False
            insightProf = False
            intimidationProf = False
            investigationProf = False
            medicineProf = False
            natureProf = False
            perceptionProf = False
            performanceProf = False
            persuasionProf = False
            religionProf = False
            sleightOfHandProf = False
            stealthProf = False
            survivalProf = False

            #   SET RACE BONUSES    #
            allRacial = request.session['race_bonus']

            splitRacial = allRacial.split(';')
            for bonus in splitRacial:
                currBonus = bonus.split('+')
                if (currBonus[0] == 'str'):
                    strRacial = currBonus[1]
                elif (currBonus[0] == 'dex'):
                    dexRacial = currBonus[1]
                elif (currBonus[0] == 'con'):
                    conRacial = currBonus[1]
                elif (currBonus[0] == 'int'):
                    intRacial = currBonus[1]
                elif (currBonus[0] == 'wis'):
                    wisRacial = currBonus[1]
                elif (currBonus[0] == 'char'):
                    charRacial = currBonus[1]
            
            #   SET PROFICIENCY BONUSES     #
            skillProfs = request.session['skillProfs']
            for skill in skillProfs:
                if (skill == 'Acrobatics'):
                    acrobaticsProf = True
                elif (skill == 'Animal Handling'):
                    animalHandlingProf = True
                elif (skill == 'Arcana'):
                    arcanaProf = True
                elif (skill == 'Athletics'):
                    athleticsProf = True
                elif (skill == 'Deception'):
                    deceptionProf = True
                elif (skill == 'History'):
                    historyProf = True
                elif (skill == 'Insight'):
                    insightProf = True
                elif (skill == 'Intimidation'):
                    intimidationProf = True
                elif (skill == 'Investigation'):
                    investigationProf = True
                elif (skill == 'Medicine'):
                    medicineProf = True
                elif (skill == 'Nature'):
                    natureProf = True
                elif (skill == 'Perception'):
                    perceptionProf = True
                elif (skill == 'Performance'):
                    performanceProf = True
                elif (skill == 'Persuasion'):
                    persuasionProf = True
                elif (skill == 'Religion'):
                    religionProf = True
                elif (skill == 'Sleight of Hand'):
                    sleightOfHandProf = True
                elif (skill == 'Stealth'):
                    stealthProf = True
                elif (skill == 'Survival'):
                    survivalProf = True

            #   SET SAVING THROWS   #
            savingThrowProfs = request.session['saving_throws']
            splitThrows = savingThrowProfs.split(', ')
            for currThrow in splitThrows:
                if (currThrow == 'Strength'):
                    strThrow = True
                elif (currThrow == 'Dexterity'):
                    dexThrow = True
                elif (currThrow == 'Constitution'):
                    conThrow = True
                elif (currThrow == 'Intelligence'):
                    intThrow = True
                elif (currThrow == 'Wisdom'):
                    wisThrow = True
                elif (currThrow == 'Charisma'):
                    charThrow == True

            #   RETRIEVE DATA FROM CURRENT PAGE FORM (traits.html)  #
            characterName = form.cleaned_data.get('character_name')
            characterGender = form.cleaned_data.get('character_gender')
            characterAge = form.cleaned_data.get('character_age')
            characterHeight = form.cleaned_data.get('character_height')
            characterWeight = form.cleaned_data.get('character_weight')
            characterLevel = form.cleaned_data.get('character_level')
            characterDeity = form.cleaned_data.get('character_deity')
            characterAlignment = form.cleaned_data.get('character_alignment')

            #   START FILLING MODEL     #
            newCharacter = Character()
            newCharacter.userID = request.user.id
            newCharacter.character_pic = ''
            newCharacter.character_name = characterName
            newCharacter.character_gender = characterGender
            newCharacter.character_age = characterAge
            newCharacter.character_height = characterHeight
            newCharacter.character_weight = characterWeight
            newCharacter.character_level = characterLevel
            newCharacter.character_deity = characterDeity
            newCharacter.character_alignment = characterAlignment
            
            newCharacter.character_background = request.session['character_background']
            newCharacter.character_race = request.session['race_id']
            newCharacter.race_bonus = allRacial
            newCharacter.character_class = request.session['class_id']
            newCharacter.character_path = request.session['class_path']

            #   FIND OUT CHARACTER LEVEL(MULTICLASSING NOT SUPPORTED YET)   #
            proficiencyBonus = +2
            if (characterLevel >= 5 and  characterLevel <= 8):
                proficiencyBonus = +3
            elif (characterLevel >= 9 and  characterLevel <= 12):
                proficiencyBonus = +4
            elif (characterLevel >= 13 and  characterLevel <= 16):
                proficiencyBonus = +5
            elif (characterLevel >= 17):
                proficiencyBonus = +6
            
            newCharacter.proficiency_bonus = proficiencyBonus

            newCharacter.inspiration = False

            #   FILL IN STR/DEX/CON/INT/WIS/CHAR    #
            strength = request.session['strength']
            newCharacter.strength = strength
            strMod = getModifier(int(strength) + int(strRacial))
            newCharacter.strMod = strMod
            newCharacter.strProf = strThrow
            if (strThrow):
                newCharacter.str_save = strMod + proficiencyBonus
            else:
                newCharacter.str_save = strMod

            dexterity = request.session['dexterity']
            newCharacter.dexterity = dexterity
            dexMod = getModifier(int(dexterity) + int(dexRacial))
            newCharacter.dexMod = dexMod
            newCharacter.dexProf = dexThrow
            if (dexThrow):
                newCharacter.dex_save = dexMod + proficiencyBonus
            else:
                newCharacter.dex_save = dexMod

            constitution = request.session['constitution']
            newCharacter.constitution = constitution
            conMod = getModifier(int(constitution) + int(conRacial))
            newCharacter.conMod = conMod
            newCharacter.conProf = conThrow
            if (conThrow):
                newCharacter.con_save = conMod + proficiencyBonus
            else:
                newCharacter.con_save = conMod

            intelligence = request.session['intelligence']
            newCharacter.intelligence = intelligence
            intMod = getModifier(int(intelligence) + int(intRacial))
            newCharacter.intMod = intMod
            newCharacter.intProf = intThrow
            if (intThrow):
                newCharacter.int_save = intMod + proficiencyBonus
            else:
                newCharacter.int_save = intMod

            wisdom = request.session['wisdom']
            newCharacter.wisdom = wisdom
            wisMod = getModifier(int(wisdom) + int(wisRacial))
            newCharacter.wisMod = wisMod
            newCharacter.wisProf = wisThrow
            if (wisThrow):
                newCharacter.wis_save = wisMod + proficiencyBonus
            else:
                newCharacter.wis_save = wisMod

            charisma = request.session['charisma']
            newCharacter.charisma = charisma
            charMod = getModifier(int(charisma) + int(charRacial))
            newCharacter.charMod = charMod
            newCharacter.charProf = charThrow
            if (charThrow):
                newCharacter.char_save = charMod + proficiencyBonus
            else:
                newCharacter.char_save = charMod


            #   PASSIVE WISDOM(PERCEPTION)  #
            if (perceptionProf == True):
                newCharacter.passive_wisdom = 10 + proficiencyBonus + wisMod
            else:
                newCharacter.passive_wisdom = 10 + wisMod

            #   FILL IN PROFICIENCIES   #
            newCharacter.acrobaticsProf = acrobaticsProf
            newCharacter.acrobatics = findSkill(acrobaticsProf, proficiencyBonus, dexMod)
            newCharacter.animalProf = animalHandlingProf
            newCharacter.animal_handling = findSkill(animalHandlingProf, proficiencyBonus, wisMod)
            newCharacter.arcanaProf = arcanaProf
            newCharacter.arcana = findSkill(arcanaProf, proficiencyBonus, intMod)
            newCharacter.athleticProf = athleticsProf
            newCharacter.athletics = findSkill(athleticsProf, proficiencyBonus, strMod)
            newCharacter.deceptionProf = deceptionProf
            newCharacter.deception = findSkill(deceptionProf, proficiencyBonus, charMod)
            newCharacter.historyProf = historyProf
            newCharacter.history = findSkill(historyProf, proficiencyBonus, intMod)
            newCharacter.insightProf = insightProf
            newCharacter.insight = findSkill(insightProf, proficiencyBonus, wisMod)
            newCharacter.intimidationProf = intimidationProf
            newCharacter.intimidation = findSkill(intimidationProf, proficiencyBonus, charMod)
            newCharacter.investigationProf = investigationProf
            newCharacter.investigation = findSkill(investigationProf, proficiencyBonus, intMod)
            newCharacter.medicineProf = medicineProf
            newCharacter.medicine = findSkill(medicineProf, proficiencyBonus, wisMod)
            newCharacter.natureProf = natureProf
            newCharacter.nature = findSkill(natureProf, proficiencyBonus, wisMod)
            newCharacter.perceptionProf = perceptionProf
            newCharacter.perception = findSkill(perceptionProf, proficiencyBonus, wisMod)
            newCharacter.performanceProf = performanceProf
            newCharacter.performance = findSkill(performanceProf, proficiencyBonus, charMod)
            newCharacter.persuasionProf = persuasionProf
            newCharacter.persuasion = findSkill(persuasionProf, proficiencyBonus, charMod)
            newCharacter.religionProf = religionProf
            newCharacter.religion = findSkill(religionProf, proficiencyBonus, intMod)
            newCharacter.sleightProf = sleightOfHandProf
            newCharacter.sleight_of_hand = findSkill(sleightOfHandProf, proficiencyBonus, dexMod)
            newCharacter.stealthProf = stealthProf
            newCharacter.stealth = findSkill(stealthProf, proficiencyBonus, dexMod)
            newCharacter.survivalProf = survivalProf
            newCharacter.survival = findSkill(survivalProf, proficiencyBonus, wisMod)

            #   SPELL INFORMATION   #
            spellCastingAbility = request.session['spell_casting_ability']
            newCharacter.spellcasting_ability = spellCastingAbility
            spellMod = ''
            if (spellCastingAbility == 'Charisma'):
                spellMod = charMod
            elif (spellCastingAbility == 'Wisdom'):
                spellMod = wisMod
            else:
                spellMod = intMod

            newCharacter.spell_save_dc = 8 + proficiencyBonus + spellMod
            newCharacter.spell_attack_bonus = spellMod + proficiencyBonus

            #   OTHER BASIC STATS   #
            newCharacter.armor_class = 10 + dexMod
            newCharacter.initiative = dexMod
            speed = request.session['speed_num']
            if (speed == ''):
                newCharacter.speed = 30
            else:
                newCharacter.speed = speed

            #   HEALTH  #
            hitpointDiceNum = int(request.session['hitpoint_start'])
            newCharacter.current_hitpoints = hitpointDiceNum + conMod
            newCharacter.max_hitpoints = hitpointDiceNum +  conMod
            newCharacter.hit_dice = 'd' + str(hitpointDiceNum)
            newCharacter.success_one = False
            newCharacter.success_two = False
            newCharacter.success_three = False
            newCharacter.failures_one = False
            newCharacter.failures_two = False
            newCharacter.failures_three = False

            #   MONEY   #   
            newCharacter.platinum_pieces = 0
            newCharacter.gold_pieces = request.session['gold']
            newCharacter.silver_pieces = 0
            newCharacter.copper_pieces = 0

            #   SENSES  #
            newCharacter.senses = request.session['senses']

            #   PROFICIENCIES   #
            newCharacter.armorProfs = request.session['armor']
            newCharacter.weaponProfs = request.session['weapons']
            newCharacter.toolProfs = request.session['tools']
            newCharacter.languageProfs = request.session['languages']

            #   CREATE UNIQUE ID FOR CHARACTER  #
            id = uuid.uuid1()
            newCharacter.id = id.hex

            newCharacter.save()
            request.session['characterSheetID'] = id.hex
            return redirect("character")
    else:
        form = TraitsForm
    return render(request = request,
                template_name = 'traits.html',
                context = {"form":form})

def character(request):
    character = Character.objects.get(id = request.session['characterSheetID'])

    senses = character.senses[2:len(character.senses)-2]
    senseList = []
    for sense in senses.split(':'):
        if sense != '':
            senseList.append(sense)

    #   GET ALL CHARACTER INFORMATION FROM THE DATABASE #
    request.session['character'] = {
        # "picURL": character.character_pic,
        "name": character.character_name,
        "race": character.character_race,
        "class": character.character_class,
        "classPath": character.character_path,
        "level": character.character_level,
        "background": character.character_background,
        "alignment": character.character_alignment,
        "proficiency": character.proficiency_bonus,
        "inspiration": character.inspiration,
        "speed": character.speed,
        "armorClass": character.armor_class,
        "initiative": character.initiative,
        "strength": character.strength,
        "dexterity": character.dexterity,
        "constitution": character.constitution,
        "intelligence": character.intelligence,
        "wisdom": character.wisdom,
        "charisma": character.charisma,
        "strMod": character.strMod,
        "dexMod": character.dexMod,
        "conMod": character.conMod,
        "intMod": character.intMod,
        "wisMod": character.wisMod,
        "charMod": character.charMod,
        "strProf": character.strProf,
        "dexProf": character.dexProf,
        "conProf": character.conProf,
        "intProf": character.intProf,
        "wisProf": character.wisProf,
        "charPRof": character.charProf,
        "strSave": character.str_save,
        "dexSave": character.dex_save,
        "conSave": character.con_save,
        "intSave": character.int_save,
        "wisSave": character.wis_save,
        "charSave": character.char_save,
        "proficiencyBonus": character.proficiency_bonus,
        "passiveWisdom": character.passive_wisdom,
        "inspiration": character.inspiration,
        "acrobatics": character.acrobatics,
        "acrobaticsProf": character.acrobaticsProf,
        "animalHandling": character.animal_handling,
        "animalProf": character.animalProf,
        "arcana": character.arcana,
        "arcanaProf": character.arcanaProf,
        "athletics": character.athletics,
        "athleticsProf": character.athleticProf,
        "deception": character.deception,
        "deceptionProf": character.deceptionProf,
        "history": character.history,
        "historyProf": character.historyProf,
        "insight": character.insight,
        "insightProf": character.insightProf,
        "intimidation": character.intimidation,
        "intimidationProf": character.intimidationProf,
        "investigation": character.investigation,
        "investigationProf": character.investigationProf,
        "medicine": character.medicine,
        "medicineProf": character.medicineProf,
        "nature": character.nature,
        "natureProf": character.natureProf,
        "perception": character.perception,
        "perceptionProf": character.perceptionProf,
        "performance": character.performance,
        "performanceProf": character.performanceProf,
        "persuasion": character.persuasion,
        "persuasionProf": character.persuasionProf,
        "religion": character.religion,
        "religionProf": character.religionProf,
        "sleightHand": character.sleight_of_hand,
        "sleightHandProf": character.sleightProf,
        "stealth": character.stealth,
        "stealthProf": character.stealthProf,
        "survival": character.survival,
        "survivalProf": character.survivalProf,
        "currHitpoints": character.current_hitpoints,
        "maxHitpoints": character.max_hitpoints,
        "tempHitpoints": character.temp_hitpoints,
        "senses": senseList,
        "armorProfs": character.armorProfs,
        "weaponProfs": character.weaponProfs,
        "toolProfs": character.toolProfs,
        "lanuages": character.languageProfs
    }
    return render(request = request,
                template_name = 'character.html')


