var drawDiagram = _ => {
    textarea1 = document.getElementById("textarea1");
    diagramDiv = document.getElementById("diagramDiv");

    newTextValue = textarea1.value
        /* .replace(/ /g, "&nbsp;") */
        .replace(/{/g, "{<div class='b' onclick='toggleColor(this)' ondblclick='rollUpDiv(this)'><span>")
        .replace(/}/g, "</span><span class='noselect' style='display:none;'> . . .</span></div>}")
        .replace(/\n +/g, "\n")
        .replace(/\r\n/g, "\n");

    if (document.getElementById("removeThreeBrs").checked) {
        newTextValue = newTextValue.replace(/\n\n\n>/g, "\n\n");
    }

    newTextValue = newTextValue.replace(/\n/g, "<br/>")

    diagramDiv.innerHTML = newTextValue;
}

var toggleColor = el => {

    if (el != window.event.target) {
        return;
    }

    switch (el.className) {
        case "b":
            el.className = "g";
            return;
        case "g":
            el.className = "r";
            return;
        case "r":
            el.className = "c";
            return;
        case "c":
            el.className = "b";
            return;
    }

}

var rollUpDiv = el => {
    if (el != window.event.target) {
        return;
    }
    if (el.style.height == "1.1em") {
        el.style.height = "";
        el.className = "g";
       /* el.style.display = "block"; */
        el.childNodes[0].style.display = "";
        el.childNodes[1].style.display = "none"
    } else {
     /*   el.style.display = "inline"; */
        el.style.height = "1.1em";
        el.className = "y";
        el.childNodes[0].style.display = "none";
        el.childNodes[1].style.display = ""
    }
}

var toggleLightDark = _ => {
    oldValue = document.body.className;

    console.log("old: " + oldValue);

    if (oldValue == "generalDark") {
        newValue = "generalLight";
    } else {
        newValue = "generalDark";
    }

    document.getElementById("textarea1").className = newValue;
    document.body.className = newValue;
}
