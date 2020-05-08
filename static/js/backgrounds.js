function backgroundChange() {
    currBackground = document.getElementById('id_character_background').value;
    console.log('Background: ' + currBackground);
    console.log('Background length: ' + allBackgrounds.backgrounds.length);

    for (i = 0; i < allBackgrounds.backgrounds.length; i++) {
        if (currBackground == allBackgrounds.backgrounds[i].backgroundName) {
            let backContainer = document.getElementById('backgroundContainer');

            let backName = document.getElementById('backgroundName');
            backName.innerHTML = allBackgrounds.backgrounds[i].backgroundName;

            let backDesc = document.getElementById('backgroundDesc');
            backDesc.innerHTML = allBackgrounds.backgrounds[i].backgroundDescription;

            // SKILL PROFICIENCIES
            let skillProfs = document.getElementById('skillProfs');
            if (allBackgrounds.backgrounds[i].skillProficiencies != '') {
                let splitSkills = allBackgrounds.backgrounds[i].skillProficiencies.split(';');
                let skillString = '';
                for (j = 0; j < splitSkills.length; j++) {
                    skillString += ' ' + splitSkills[j] + ','
                }
                let skillStringLen = skillString.length;
                skillString = skillString.substring(0, skillStringLen - 1);
                skillProfs.innerHTML = "Skill Proficiencies: " + skillString;
            }

            // TOOL PROFICIENCIES
            let toolProfs = document.getElementById('toolProfs');
            if (allBackgrounds.backgrounds[i].toolProfs != '') {
                let splitTools = allBackgrounds.backgrounds[i].toolProfs.split(';');
                let toolString = '';
                for (k = 0; k < splitTools.length; k++) {
                    toolString += ' ' + splitTools[k] + ',';
                }
                let toolStringLen = toolString.length;
                toolString = toolString.substring(0, toolStringLen - 1);
                toolProfs.innerHTML = "Tool Proficiencies: " + toolString;
            }

            // LANGUAGES
            if (allBackgrounds.backgrounds[i].numLanguages != '') {
                let languages = document.getElementById('languages');
                languages.innerHTML = "Choose any " + allBackgrounds.backgrounds[i].numLanguages + " languages.";
            }

            // EQUIPMENT
            let equip = document.getElementById('equipment');
            let splitEquip = allBackgrounds.backgrounds[i].equipment.split(';');
            let equipString = '';
            for (l = 0; l < splitEquip.length; l++) {
                equipString += ' ' + splitEquip[l] + ',';
            }
            let equipStringLen = equipString.length;
            equipString = equipString.substring(0, equipStringLen - 1);
            equip.innerHTML = "Equipment: " + equipString;


            // CURRENCY
            let currency = document.getElementById('currency');
            let currencyString = "Starting currency with this background is ";
            if (allBackgrounds.backgrounds[i].currency.platinum != '') {
                currencyString += ' ' + allBackgrounds.backgrounds[i].currency.platinum +'pp';
            }
            if (allBackgrounds.backgrounds[i].currency.gold != '') {
                currencyString += ' ' + allBackgrounds.backgrounds[i].currency.gold +'gp';
            }
            if (allBackgrounds.backgrounds[i].currency.silver != '') {
                currencyString += ' ' + allBackgrounds.backgrounds[i].currency.silver +'sp';
            }
            if (allBackgrounds.backgrounds[i].currency.copper != '') {
                currencyString += ' ' + allBackgrounds.backgrounds[i].currency.copper +'cp';
            }
            currency.innerHTML = currencyString;
            document.getElementById('gold').value = allBackgrounds.backgrounds[i].currency.gold;

            // FEATURES
            let features = document.getElementById('features');
            for (m = 0; m < allBackgrounds.backgrounds[i].features.length; m++) {
                let featureTitle = document.createElement('h3');
                featureTitle.innerHTML = allBackgrounds.backgrounds[i].features[m].featureName;

                let featureDesc = document.createElement('p');
                featureDesc.innerHTML = allBackgrounds.backgrounds[i].features[m].featureDescription;
                
                let newListItem = document.createElement('li');
                newListItem.appendChild(featureTitle);
                newListItem.appendChild(featureDesc);

                features.appendChild(newListItem);
            }
        }
    }
}