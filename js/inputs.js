function updateDate() {
    alert("hi")
    var dateInput = document.getElementById("dateInput");
    var children = dateInput.children;
    targetDateList[0] = children[0].value;
    targetDateList[1] = children[1].value;
    targetDateList[2] = children[2].value;
    targetDateList[3] = children[3].children[0].children[0].value;
    targetDateList[4] = children[3].children[0].children[1].value;
    targetDateList[5] = children[3].children[0].children[2].value;
    targetDateList[6] = children[4].value;
    global.targetDate = targetDateList[0] + " " + targetDateList[1] + ", " + targetDateList[2] + " " + targetDateList[3] + ":" + targetDateList[4] + ":" + targetDateList[5] + " " + targetDateList[6];
}