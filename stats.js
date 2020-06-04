/*

have each function hold all race bonuses and compare it 
separately in each function for that particular skill and assign it

*/

function StrChange() {
    let rollStr = document.getElementById('id_strength').value;
    let baseLabel = document.getElementById('strBase');

    // Get Racial Bonus
    let raceString = sessionStorage.getItem('race_bonus');
    let raceBonuses = raceString.split(';');

    let strRacial = 0;

    for(i = 0; i < raceBonuses.length; i++) {
        let bonusType = raceBonuses[i].split('+');
        if (bonusType[0] == 'str') {
            strRacial = parseInt(bonusType[1]);
            let displayRacial = document.getElementById('strRacial');
            displayRacial.innerHTML = '+' + strRacial;
        } 
    }

    // Change base label
    if (rollStr != '') {
        baseLabel.innerHTML = rollStr;
    } else {
        baseLabel.innerHTML = '0';
    }

    // Calculate Total Score
    let totalLabel = document.getElementById('strTotal');
    let totalScore = parseInt(rollStr) + parseInt(strRacial);
    totalLabel.innerHTML = totalScore;

    // Calculate Modifier
    let modifier = 0;
    if (totalScore == 1) {
        modifier = -5;
    } else if (totalScore == 2 || totalScore == 3) {
        modifier = -4;
    } else if (totalScore == 4 || totalScore == 5) {
        modifier = -3;
    } else if (totalScore == 6 || totalScore == 7) {
        modifier = -2;
    } else if (totalScore == 8 || totalScore == 9) {
        modifier = -1;
    } else if (totalScore == 10 || totalScore == 11) {
        modifier = 0;
    } else if (totalScore == 12 || totalScore == 13) {
        modifier = 1;
    } else if (totalScore == 14 || totalScore == 15) {
        modifier = 2;
    } else if (totalScore == 16 || totalScore == 17) {
        modifier = 3;
    } else if (totalScore == 18 || totalScore == 19) {
        modifier = 4;
    } else if (totalScore == 20 || totalScore == 21) {
        modifier = 5;
    } else if (totalScore == 22 || totalScore == 23) {
        modifier = 6;
    } else if (totalScore == 24 || totalScore == 25) {
        modifier = 7;
    } else if (totalScore == 26 || totalScore == 27) {
        modifier = 8;
    } else if (totalScore == 28 || totalScore == 29) {
        modifier = 9;
    } else if (totalScore == 30) {
        modifier = 10;
    } else {
        modifier = 0;
    }

    // Get the modifier sign (pos || neg)
    let sign;
    if (modifier < 0) {
        sign = '';
    } else {
        sign = '+';
    }

    // Fill in modifier label
    let  modLabel = document.getElementById('strMod');
    modLabel.innerHTML = sign + modifier;
}

function DexChange() {
    let rollDex = document.getElementById('id_dexterity').value;
    let baseLabel = document.getElementById('dexBase');

    if (rollDex != '') {
        baseLabel.innerHTML = rollDex;
    } else {
        baseLabel.innerHTML = '0';
    }

    let dexRacial = 0;

    // Get Racial Bonus
    let raceString = sessionStorage.getItem('race_bonus');
    let raceBonuses = raceString.split(';');

    for(i = 0; i < raceBonuses.length; i++) {
        let bonusType = raceBonuses[i].split('+');
        if (bonusType[0] == 'dex') {
            dexRacial = parseInt(bonusType[1]);
            let displayRacial = document.getElementById('dexRacial');
            displayRacial.innerHTML = '+' + dexRacial;
        } 
    }

    // Calculate Total Score
    let totalLabel = document.getElementById('dexTotal');
    let totalScore = parseInt(rollDex) + parseInt(dexRacial);
    totalLabel.innerHTML = totalScore;

    // Calculate Modifier
    let modifier = 0;
    if (totalScore == 1) {
        modifier = -5;
    } else if (totalScore == 2 || totalScore == 3) {
        modifier = -4;
    } else if (totalScore == 4 || totalScore == 5) {
        modifier = -3;
    } else if (totalScore == 6 || totalScore == 7) {
        modifier = -2;
    } else if (totalScore == 8 || totalScore == 9) {
        modifier = -1;
    } else if (totalScore == 10 || totalScore == 11) {
        modifier = 0;
    } else if (totalScore == 12 || totalScore == 13) {
        modifier = 1;
    } else if (totalScore == 14 || totalScore == 15) {
        modifier = 2;
    } else if (totalScore == 16 || totalScore == 17) {
        modifier = 3;
    } else if (totalScore == 18 || totalScore == 19) {
        modifier = 4;
    } else if (totalScore == 20 || totalScore == 21) {
        modifier = 5;
    } else if (totalScore == 22 || totalScore == 23) {
        modifier = 6;
    } else if (totalScore == 24 || totalScore == 25) {
        modifier = 7;
    } else if (totalScore == 26 || totalScore == 27) {
        modifier = 8;
    } else if (totalScore == 28 || totalScore == 29) {
        modifier = 9;
    } else if (totalScore == 30) {
        modifier = 10;
    } else {
        modifier = 0;
    }

    // Get the modifier sign (pos || neg)
    let sign;
    if (modifier < 0) {
        sign = '';
    } else {
        sign = '+';
    }

    // Fill in modifier label
    let  modLabel = document.getElementById('dexMod');
    modLabel.innerHTML = sign + modifier;
}

function ConChange() {
    let rollCon = document.getElementById('id_constitution').value;
    let baseLabel = document.getElementById('conBase');

    if (rollCon != '') {
        baseLabel.innerHTML = rollCon;
    } else {
        baseLabel.innerHTML = '0';
    }

    let conRacial = 0;

    // Get Racial Bonus
    let raceString = sessionStorage.getItem('race_bonus');
    let raceBonuses = raceString.split(';');

    for(i = 0; i < raceBonuses.length; i++) {
        let bonusType = raceBonuses[i].split('+');
        if (bonusType[0] == 'con') {
            conRacial = parseInt(bonusType[1]);
            let displayRacial = document.getElementById('conRacial');
            displayRacial.innerHTML = '+' + conRacial;
        } 
    }

    // Calculate Total Score
    let totalLabel = document.getElementById('conTotal');
    let totalScore = parseInt(rollCon) + parseInt(conRacial);
    totalLabel.innerHTML = totalScore;

    // Calculate Modifier
    let modifier = 0;
    if (totalScore == 1) {
        modifier = -5;
    } else if (totalScore == 2 || totalScore == 3) {
        modifier = -4;
    } else if (totalScore == 4 || totalScore == 5) {
        modifier = -3;
    } else if (totalScore == 6 || totalScore == 7) {
        modifier = -2;
    } else if (totalScore == 8 || totalScore == 9) {
        modifier = -1;
    } else if (totalScore == 10 || totalScore == 11) {
        modifier = 0;
    } else if (totalScore == 12 || totalScore == 13) {
        modifier = 1;
    } else if (totalScore == 14 || totalScore == 15) {
        modifier = 2;
    } else if (totalScore == 16 || totalScore == 17) {
        modifier = 3;
    } else if (totalScore == 18 || totalScore == 19) {
        modifier = 4;
    } else if (totalScore == 20 || totalScore == 21) {
        modifier = 5;
    } else if (totalScore == 22 || totalScore == 23) {
        modifier = 6;
    } else if (totalScore == 24 || totalScore == 25) {
        modifier = 7;
    } else if (totalScore == 26 || totalScore == 27) {
        modifier = 8;
    } else if (totalScore == 28 || totalScore == 29) {
        modifier = 9;
    } else if (totalScore == 30) {
        modifier = 10;
    } else {
        modifier = 0;
    }

    // Get the modifier sign (pos || neg)
    let sign;
    if (modifier < 0) {
        sign = '';
    } else {
        sign = '+';
    }

    // Fill in modifier label
    let  modLabel = document.getElementById('conMod');
    modLabel.innerHTML = sign + modifier;
}

function IntChange() {
    let rollInt = document.getElementById('id_intelligence').value;
    let baseLabel = document.getElementById('intBase');

    if (rollInt != '') {
        baseLabel.innerHTML = rollInt;
    } else {
        baseLabel.innerHTML = '0';
    }

    let intRacial = 0;

    // Get Racial Bonus
    let raceString = sessionStorage.getItem('race_bonus');
    let raceBonuses = raceString.split(';');

    for(i = 0; i < raceBonuses.length; i++) {
        let bonusType = raceBonuses[i].split('+');
        if (bonusType[0] == 'int') {
            intRacial = parseInt(bonusType[1]);
            let displayRacial = document.getElementById('intRacial');
            displayRacial.innerHTML = '+' + intRacial;
        } 
    }

    // Calculate Total Score
    let totalLabel = document.getElementById('intTotal');
    let totalScore = parseInt(rollInt) + parseInt(intRacial);
    totalLabel.innerHTML = totalScore;

    // Calculate Modifier
    let modifier = 0;
    if (totalScore == 1) {
        modifier = -5;
    } else if (totalScore == 2 || totalScore == 3) {
        modifier = -4;
    } else if (totalScore == 4 || totalScore == 5) {
        modifier = -3;
    } else if (totalScore == 6 || totalScore == 7) {
        modifier = -2;
    } else if (totalScore == 8 || totalScore == 9) {
        modifier = -1;
    } else if (totalScore == 10 || totalScore == 11) {
        modifier = 0;
    } else if (totalScore == 12 || totalScore == 13) {
        modifier = 1;
    } else if (totalScore == 14 || totalScore == 15) {
        modifier = 2;
    } else if (totalScore == 16 || totalScore == 17) {
        modifier = 3;
    } else if (totalScore == 18 || totalScore == 19) {
        modifier = 4;
    } else if (totalScore == 20 || totalScore == 21) {
        modifier = 5;
    } else if (totalScore == 22 || totalScore == 23) {
        modifier = 6;
    } else if (totalScore == 24 || totalScore == 25) {
        modifier = 7;
    } else if (totalScore == 26 || totalScore == 27) {
        modifier = 8;
    } else if (totalScore == 28 || totalScore == 29) {
        modifier = 9;
    } else if (totalScore == 30) {
        modifier = 10;
    } else {
        modifier = 0;
    }

    // Get the modifier sign (pos || neg)
    let sign;
    if (modifier < 0) {
        sign = '';
    } else {
        sign = '+';
    }

    // Fill in modifier label
    let  modLabel = document.getElementById('intMod');
    modLabel.innerHTML = sign + modifier;
}

function WisChange() {
    let rollWis = document.getElementById('id_wisdom').value;
    let baseLabel = document.getElementById('wisBase');

    if (rollWis != '') {
        baseLabel.innerHTML = rollWis;
    } else {
        baseLabel.innerHTML = '0';
    }

    let wisRacial = 0;

    // Get Racial Bonus
    let raceString = sessionStorage.getItem('race_bonus');
    let raceBonuses = raceString.split(';');

    for(i = 0; i < raceBonuses.length; i++) {
        let bonusType = raceBonuses[i].split('+');
        if (bonusType[0] == 'wis') {
            wisRacial = parseInt(bonusType[1]);
            let displayRacial = document.getElementById('wisRacial');
            displayRacial.innerHTML = '+' + wisRacial;
        } 
    }

    // Calculate Total Score
    let totalLabel = document.getElementById('wisTotal');
    let totalScore = parseInt(rollWis) + parseInt(wisRacial);
    totalLabel.innerHTML = totalScore;

    // Calculate Modifier
    let modifier = 0;
    if (totalScore == 1) {
        modifier = -5;
    } else if (totalScore == 2 || totalScore == 3) {
        modifier = -4;
    } else if (totalScore == 4 || totalScore == 5) {
        modifier = -3;
    } else if (totalScore == 6 || totalScore == 7) {
        modifier = -2;
    } else if (totalScore == 8 || totalScore == 9) {
        modifier = -1;
    } else if (totalScore == 10 || totalScore == 11) {
        modifier = 0;
    } else if (totalScore == 12 || totalScore == 13) {
        modifier = 1;
    } else if (totalScore == 14 || totalScore == 15) {
        modifier = 2;
    } else if (totalScore == 16 || totalScore == 17) {
        modifier = 3;
    } else if (totalScore == 18 || totalScore == 19) {
        modifier = 4;
    } else if (totalScore == 20 || totalScore == 21) {
        modifier = 5;
    } else if (totalScore == 22 || totalScore == 23) {
        modifier = 6;
    } else if (totalScore == 24 || totalScore == 25) {
        modifier = 7;
    } else if (totalScore == 26 || totalScore == 27) {
        modifier = 8;
    } else if (totalScore == 28 || totalScore == 29) {
        modifier = 9;
    } else if (totalScore == 30) {
        modifier = 10;
    } else {
        modifier = 0;
    }

    // Get the modifier sign (pos || neg)
    let sign;
    if (modifier < 0) {
        sign = '';
    } else {
        sign = '+';
    }

    // Fill in modifier label
    let  modLabel = document.getElementById('wisMod');
    modLabel.innerHTML = sign + modifier;
}

function CharChange() {
    let rollChar = document.getElementById('id_charisma').value;
    let baseLabel = document.getElementById('charBase');

    if (rollChar != '') {
        baseLabel.innerHTML = rollChar;
    } else {
        baseLabel.innerHTML = '0';
    }

    let charRacial = 0;

    // Get Racial Bonus
    let raceString = sessionStorage.getItem('race_bonus');
    let raceBonuses = raceString.split(';');

    for(i = 0; i < raceBonuses.length; i++) {
        let bonusType = raceBonuses[i].split('+');
        if (bonusType[0] == 'char') {
            charRacial = parseInt(bonusType[1]);
            let displayRacial = document.getElementById('charRacial');
            displayRacial.innerHTML = '+' + charRacial;
        } 
    }

    // Calculate Total Score
    let totalLabel = document.getElementById('charTotal');
    let totalScore = parseInt(rollChar) + parseInt(charRacial);
    totalLabel.innerHTML = totalScore;

    // Calculate Modifier
    let modifier = 0;
    if (totalScore == 1) {
        modifier = -5;
    } else if (totalScore == 2 || totalScore == 3) {
        modifier = -4;
    } else if (totalScore == 4 || totalScore == 5) {
        modifier = -3;
    } else if (totalScore == 6 || totalScore == 7) {
        modifier = -2;
    } else if (totalScore == 8 || totalScore == 9) {
        modifier = -1;
    } else if (totalScore == 10 || totalScore == 11) {
        modifier = 0;
    } else if (totalScore == 12 || totalScore == 13) {
        modifier = 1;
    } else if (totalScore == 14 || totalScore == 15) {
        modifier = 2;
    } else if (totalScore == 16 || totalScore == 17) {
        modifier = 3;
    } else if (totalScore == 18 || totalScore == 19) {
        modifier = 4;
    } else if (totalScore == 20 || totalScore == 21) {
        modifier = 5;
    } else if (totalScore == 22 || totalScore == 23) {
        modifier = 6;
    } else if (totalScore == 24 || totalScore == 25) {
        modifier = 7;
    } else if (totalScore == 26 || totalScore == 27) {
        modifier = 8;
    } else if (totalScore == 28 || totalScore == 29) {
        modifier = 9;
    } else if (totalScore == 30) {
        modifier = 10;
    } else {
        modifier = 0;
    }

    // Get the modifier sign (pos || neg)
    let sign;
    if (modifier < 0) {
        sign = '';
    } else {
        sign = '+';
    }

    // Fill in modifier label
    let  modLabel = document.getElementById('charMod');
    modLabel.innerHTML = sign + modifier;
}