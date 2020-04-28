from django.db import models

class Character(models.Model):

    # ---- Choices ---- #
    genderChoices = (
        ('', ''),
        ('Male', 'Male'),
        ('Female', 'Female'),
    )

    # ---- BASIC CHARACTER INFO ---- #
    id = models.CharField(primary_key=True,null=False,max_length=100)
    userID = models.IntegerField(default=-1)
    character_pic = models.ImageField(default=' ')
    character_name = models.CharField(max_length=50, default='Ronald')
    
    character_gender = models.CharField(
        max_length = 10, 
        choices = genderChoices,
        default = 'Male')
    character_age = models.IntegerField()
    character_height = models.CharField(max_length=10, default=' ')
    character_weight = models.CharField(max_length=10, default=' ')

    character_race = models.CharField(max_length=30, default=' ')
    race_bonus = models.CharField(max_length=30, default=' ')
    character_class = models.CharField(max_length=30, default=' ')
    character_path = models.CharField(max_length=30, default=' ')
    character_level = models.IntegerField(default=1)

    character_alignment = models.CharField(max_length=30, default=' ')
    character_deity = models.CharField(max_length=20, default=' ')
    character_background = models.CharField(max_length=30, default=' ')

    # savingThrows = models.CharField(max_length=100)

    # ---- ABILITY SCORES ---- #
    strength = models.IntegerField(default=10)
    dexterity = models.IntegerField(default=10)
    constitution = models.IntegerField(default=10)
    intelligence = models.IntegerField(default=10)
    wisdom = models.IntegerField(default=10)
    charisma = models.IntegerField(default=10)

    # ---- MODIFIERS ---- #
    strMod = models.IntegerField(default=0)
    dexMod = models.IntegerField(default=0)
    conMod = models.IntegerField(default=0)
    intMod = models.IntegerField(default=0)
    wisMod = models.IntegerField(default=0)
    charMod = models.IntegerField(default=0)

    # ---- Saving Throws ---- #
    str_save = models.IntegerField(default=0)
    strProf = models.BooleanField(default=False)
    dex_save = models.IntegerField(default=0)
    dexProf = models.BooleanField(default=False)
    con_save = models.IntegerField(default=0)
    conProf = models.BooleanField(default=False)
    int_save = models.IntegerField(default=0)
    intProf = models.BooleanField(default=False)
    wis_save = models.IntegerField(default=0)
    wisProf = models.BooleanField(default=False)
    char_save = models.IntegerField(default=0)
    charProf = models.BooleanField(default=False)

    proficiency_bonus = models.IntegerField(default=0)
    passive_wisdom = models.IntegerField(default=0)
    inspiration = models.BooleanField(default=False)

    # ---- Skills ---- #
    acrobatics = models.IntegerField(default=0)
    acrobaticsProf = models.BooleanField(default=False)

    animal_handling = models.IntegerField(default=0)
    animalProf = models.BooleanField(default=False)

    arcana = models.IntegerField(default=0)
    arcanaProf = models.BooleanField(default=False)

    athletics = models.IntegerField(default=0)
    athleticProf = models.BooleanField(default=False)

    deception = models.IntegerField(default=0)
    deceptionProf = models.BooleanField(default=False)

    history = models.IntegerField(default=0)
    historyProf = models.BooleanField(default=False)

    insight = models.IntegerField(default=0)
    insightProf = models.BooleanField(default=False)

    intimidation = models.IntegerField(default=0)
    intimidationProf = models.BooleanField(default=False)

    investigation = models.IntegerField(default=0)
    investigationProf = models.BooleanField(default=False)

    medicine = models.IntegerField(default=0)
    medicineProf = models.BooleanField(default=False)

    nature = models.IntegerField(default=0)
    natureProf = models.BooleanField(default=False)

    perception = models.IntegerField(default=0)
    perceptionProf = models.BooleanField(default=False)

    performance = models.IntegerField(default=0)
    performanceProf = models.BooleanField(default=False)

    persuasion = models.IntegerField(default=0)
    persuasionProf = models.BooleanField(default=False)

    religion = models.IntegerField(default=0)
    religionProf = models.BooleanField(default=False)

    sleight_of_hand = models.IntegerField(default=0)
    sleightProf = models.BooleanField(default=False)

    stealth = models.IntegerField(default=0)
    stealthProf = models.BooleanField(default=False)

    survival = models.IntegerField(default=0)
    survivalProf = models.BooleanField(default=False)

    # ---- Magic ---- #
    spellcasting_ability = models.CharField(max_length=30, default=' ')
    spell_save_dc = models.IntegerField(default=0)
    spell_attack_bonus = models.IntegerField(default=0)

    # ---- Uncategorized Stats ---- #
    armor_class = models.IntegerField(default=0)
    initiative = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)

    # ---- Health ---- #
    current_hitpoints = models.IntegerField(default=0)
    max_hitpoints = models.IntegerField(default=0)
    temp_hitpoints = models.IntegerField(default=0)
    hit_dice = models.CharField(max_length=20, default=' ')
    success_one = models.BooleanField(default=False)
    success_two = models.BooleanField(default=False)
    success_three = models.BooleanField(default=False)
    failures_one = models.BooleanField(default=False)
    failures_two = models.BooleanField(default=False)
    failures_three = models.BooleanField(default=False)

    # ---- Money ---- #
    platinum_pieces = models.IntegerField(default=0)
    gold_pieces = models.IntegerField(default=0)
    electrum_pieces = models.IntegerField(default=0)
    silver_pieces = models.IntegerField(default=0)
    copper_pieces = models.IntegerField(default=0)

    # ---- Misc ----#
    senses = models.CharField(max_length=200, null=True)

    #   PROFICIENCIES   #
    armorProfs = models.CharField(max_length=200, null=False, default="None")
    weaponProfs = models.CharField(max_length=200, null=False, default="None")
    toolProfs = models.CharField(max_length=200, null=False, default="None")
    languageProfs = models.CharField(max_length=200, null=False, default="None")
    
