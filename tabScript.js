function openTab(evt, tabname, buttonClicked) {
    var i, tabcontent, tablinks;
    buttonClickedClass = buttonClicked.className.split(" ")[0];

    tabClassName = document.getElementById(tabname).className;
    tabcontent = document.getElementsByClassName(tabClassName);
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