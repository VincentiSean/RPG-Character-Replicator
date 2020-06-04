let className = document.getElementById('classTitle').innerText;
let detailContainer = document.getElementById("detailsSection");
let tokenValue = document.getElementsByName('csrfmiddlewaretoken')[0].value;

for (i = 0; i < allClasses.paths.length; i++) {
    if(className == allClasses.paths[i].class) {
        let pathName = document.createElement("button");
        pathName.className = "accordion pathTitle";
        pathName.innerHTML = allClasses.paths[i].type;
        detailContainer.appendChild(pathName);

        let panelDiv = document.createElement("div");
        panelDiv.className = "panel";
        detailContainer.appendChild(panelDiv);

        let formSection = document.createElement("form");
        formSection.method = "POST";
        panelDiv.appendChild(formSection);

        var inputElem = document.createElement('input');
        inputElem.type = 'hidden';
        inputElem.name = 'csrfmiddlewaretoken';
        inputElem.value = tokenValue;
        formSection.appendChild(inputElem);

        let pathDesc = document.createElement("p");
        pathDesc.className = "pathDesc";
        pathDesc.innerHTML = allClasses.paths[i].description;
        formSection.appendChild(pathDesc);

        for(j = 0; j < allClasses.paths[i].abilities.length; j++){
            let abiltityName = document.createElement("h4");
            abiltityName.className = "abilityTitle";
            abiltityName.innerHTML = allClasses.paths[i].abilities[j].abilityTitle;
            formSection.appendChild(abiltityName);

            let abilityDesc = document.createElement("p");
            abilityDesc.className = "abilityDescription";
            abilityDesc.innerHTML = allClasses.paths[i].abilities[j].abilityDescription;
            formSection.appendChild(abilityDesc);
        }

        let submitButton = document.createElement("button");
        submitButton.className = "pathSubmit";
        submitButton.name = "pathValue";
        submitButton.innerHTML = "Select Path";
        submitButton.value = allClasses.paths[i].type;
        submitButton.type = "submit";
        formSection.appendChild(submitButton);
    }
}
