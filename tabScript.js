// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabContent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// function openActionTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabActionContent")
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("actionTabLinks")
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

function openTab(evt, tabname, buttonClicked) {
    var i, tabcontent, tablinks;
    console.log(buttonClicked)
    buttonClickedClass = buttonClicked.className.split(" ")[0];

    tabClassName = document.getElementById(tabname).className;
    console.log(tabClassName)
    tabcontent = document.getElementsByClassName(tabClassName);
    console.log(tabcontent)
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        if (tablinks[i].className.split(" ")[0] == buttonClickedClass) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}