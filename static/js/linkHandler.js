function classChange() {
    let container = document.getElementsByClassName("creationSection");
    container.className("class");

    <div class="detailsContainer" id="classContainer">
                <h1 id="classHeader"></h1>
                <p id="aboutClass"></p>
                <h3 class="titleDescriptor">Primary Ability</h3>
                <p id="primaryStat"></p>
                <h3 class="titleDescriptor">Saves</h3>
                <p id="saves"></p>
                <h2 class="subTitleDescriptor">Hit Points</h2>
                <h3 class="titleDescriptor">Hit Dice</h3>
                <p id="hitdice"></p>
                <h3 class="titleDescriptor">Hit Points at 1st Level</h3>
                <p id="hitPointsStart"></p>
                <h3 class="titleDescriptor">Hit Points at Higher Levels</h3>
                <p id="hitPointsHigh"></p>
                <h2 class="subTitleDescriptor">Proficiencies</h2>
                <h3 class="titleDescriptor">Armor</h3>
                <p id="armor"></p>
                <h3 class="titleDescriptor">Weapons</h3>
                <p id="weapons"></p>
                <h3 class="titleDescriptor">Tools</h3>
                <p id="tools"></p>
                <h3 class="titleDescriptor">Saving Throws</h3>
                <p id="savingThrows"></p>
                <h3 class="titleDescriptor">Skills</h3>
                <p id="skills"></p>
                <div id="classAbilitiesContainer">
                </div>
        </div>

    let divHolder = document.createElement("div");
    divHolder.className = "detailsContainer";
    divHolder.idName = "classContainer";
    container.appendChild(abilityHeader);

    divHolder = document.getElementById("classContainer");
    let 
}