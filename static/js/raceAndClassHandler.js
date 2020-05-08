let numRaces = 21;
let numClasses = 12;
let abilityLen;
let skillLen;

function changeRaceValues(race) {
    let abilityContainer = document.getElementById("abilitiesContainer");

    /* RUN THROUGH ALL RACES LOOKING FOR A MATCH (IF) */
    for (i = 0; i < numRaces; i++) {
        if (raceData.races[i].race == race){

            /* ADD RACE BONUS BEHIND THE SCENCES TO SESSION STORAGE */
            sessionStorage.setItem('race_bonus', raceData.races[i].raceBonus);
            let bonus = sessionStorage.getItem('race_bonus');

            /* DELETE OLD RACE ABILITIES ON NEW SELECTION */
            if (abilityLen > 0){
            
                while(abilityContainer.firstChild) {
                    abilityContainer.removeChild(abilityContainer.lastChild);
                }

            }

            /* FILL IN NEW INFORMATION FOR NEWLY SELECTED RACE */
            document.getElementById('raceHeader').innerHTML = raceData.races[i].race;
            document.getElementById('racialBonus').innerHTML = raceData.races[i].raceBonus;
            document.getElementById('racialBonus').value = raceData.races[i].raceBonus;
            document.getElementById('aboutRace').innerHTML = raceData.races[i].description;
            document.getElementById('abilityScore').innerHTML = raceData.races[i].abilityScoreIncrease;
            document.getElementById('age').innerHTML = raceData.races[i].age;
            document.getElementById('alignment').innerHTML = raceData.races[i].alignment;
            document.getElementById('size').innerHTML = raceData.races[i].size;
            document.getElementById('speed').innerHTML = raceData.races[i].speed;
            document.getElementById('speedNum').value = raceData.races[i].speedNum;
            document.getElementById('languages').innerHTML = raceData.races[i].languages;
            document.getElementById('langList').value = raceData.races[i].languageList;
            
            let abilitiesString = '';
            /* LIST RACE SPECIFIC ABILITIES */
            abilityLen = raceData.races[i].abilities.length;
            for(j = 0; j < abilityLen; j++) {
                let abilityHeader = document.createElement("h3");
                abilityHeader.innerHTML = raceData.races[i].abilities[j].abilityName;
                abilityHeader.className = "titleDescriptorSpecial";
                abilityContainer.appendChild(abilityHeader);
                abilitiesString += ':' + raceData.races[i].abilities[j].abilityName;

                let abilityDescription = document.createElement("p");
                abilityDescription.innerHTML = raceData.races[i].abilities[j].abilityDescription;
                abilityDescription.className = "abilityDescription";
                abilityContainer.appendChild(abilityDescription);
            }

            document.getElementById('abilities').value = abilitiesString;
        }
    }
}

function changeClassValues(classValue) {
    let classProficiencyCont = document.getElementById("classProficiencies");
    let classAbilityContainer = document.getElementById("classAbilitiesContainer");
    
    /* RUN THROUGH ALL CLASSES LOOKING FOR A MATCH (IF) */
    for (i = 0; i < numClasses; i++) {
        if (classData.classes[i].class == classValue){

            /* ADD RACE BONUS BEHIND THE SCENCES TO SESSION STORAGE */
            sessionStorage.setItem('spellCastingAbility', classData.classes[i].spellCastingAbility);
            //let bonus = sessionStorage.getItem('race_bonus');

            /*  DELETES OLD CLASS ABILITIES   */
            if (abilityLen > 0){
            
                while(classAbilityContainer.firstChild) {
                    classAbilityContainer.removeChild(classAbilityContainer.lastChild);
                }

            }

            /*  DELETES OLD ABILITY PROFICIENCIES   */
            if (skillLen > 0) {
                while(classProficiencyCont.firstChild) {
                    classProficiencyCont.removeChild(classProficiencyCont.lastChild);
                }
            }

            let classProfsText = '';
            /*  FILL IN NEW INFORMATION FOR NEWLY SELECTED CLASS    */
            document.getElementById('spellCastingAbility').innerHTML = classData.classes[i].spellCastingAbility;
            document.getElementById('spellCastingAbility').value = classData.classes[i].spellCastingAbility;
            document.getElementById('classHeader').innerHTML = classData.classes[i].class;
            document.getElementById('aboutClass').innerHTML = classData.classes[i].classDescription;
            document.getElementById('primaryStat').innerHTML = classData.classes[i].primaryStat;
            document.getElementById('saves').innerHTML = classData.classes[i].saves;
            document.getElementById('hitdice').innerHTML = classData.classes[i].hitPoints.hitDice;
            document.getElementById('hitpoints').value = classData.classes[i].hitPoints.hitPointHidden;
            document.getElementById('hitPointsStart').innerHTML = classData.classes[i].hitPoints.hitPointsStart;
            document.getElementById('hitPointsHigh').innerHTML = classData.classes[i].hitPoints.hitPointsHigh;
            document.getElementById('armor').innerHTML = classData.classes[i].proficiencies.armor;
            document.getElementById('weapons').innerHTML = classData.classes[i].proficiencies.weapons;
            document.getElementById('tools').innerHTML = classData.classes[i].proficiencies.tools;
            document.getElementById('savingThrowsP').innerHTML = classData.classes[i].proficiencies.savingThrows;
            document.getElementById('savingThrows').value = classData.classes[i].proficiencies.savingThrows;
            document.getElementById('skills').innerHTML = classData.classes[i].proficiencies.skills;
            
            classProfsText = classData.classes[i].proficiencies.armor;
            classProfsText += ":" + classData.classes[i].proficiencies.weapons;
            classProfsText += ":" + classData.classes[i].proficiencies.tools;
            document.getElementById('classProfsList').value = classProfsText;

            /* ADD AN UNOREDERED LIST TO HOLD PROFICIENCY CHECKBOXES */
            let classProficiencies = document.createElement('ul');
            classProficiencies.id = "id_skillProfs";
            classProficiencyCont.appendChild(classProficiencies);

            let skillProfList = classData.classes[i].proficiencies.skillsList.split(';');
            skillLen = skillProfList.length;
            let skillProfNum = classData.classes[i].proficiencies.numSkills;
            /*  ADD CHECKBOXES */
            for (k = 0; k < skillLen; k++) {
                
                let checkBox = document.createElement("input");
                checkBox.setAttribute("type", "checkbox");
                checkBox.name = "skillProfs";
                checkBox.value = skillProfList[k];
                classProficiencies.appendChild(checkBox);
                
                let checkLabel = document.createElement("label");
                checkLabel.setAttribute("for", "skillProfs");
                checkLabel.innerHTML = skillProfList[k];
                classProficiencies.appendChild(checkLabel);

                classProficiencies.appendChild(document.createElement("br"));
            }

            /* LIST CLASS SPECIFIC ABILITIES */
            abilityLen = classData.classes[i].classAbilities.length;
            for(j = 0; j < abilityLen; j++) {
                let abilityHeader = document.createElement("h3");
                abilityHeader.innerHTML = classData.classes[i].classAbilities[j].name;
                abilityHeader.className = "titleDescriptorSpecial";
                classAbilityContainer.appendChild(abilityHeader);
                
                let levelDescription = document.createElement("p");
                levelDescription.innerHTML = classData.classes[i].classAbilities[j].level;
                levelDescription.className = "abilityDescription";
                classAbilityContainer.appendChild(levelDescription);

                let abilityDescription = document.createElement("p");
                abilityDescription.innerHTML = classData.classes[i].classAbilities[j].description;
                abilityDescription.className = "abilityDescription";
                classAbilityContainer.appendChild(abilityDescription);
            }
        }
    }
}

function raceChange(){
    var raceSelect = document.getElementById('id_character_race');
    var raceValue = raceSelect.options[raceSelect.selectedIndex].text;
    changeRaceValues(raceValue);
}

function classChange(){
    var classSelect = document.getElementById('id_character_class')
    var classValue = classSelect.options[classSelect.selectedIndex].text;
    changeClassValues(classValue)
}

