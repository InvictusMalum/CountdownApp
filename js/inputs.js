function updateDate() {
    var dateInput = document.getElementById("dateInput");
    var children = dateInput.children;
    Target.SetValues(children[date].children[month].value,
                    children[date].children[day].value,
                    children[date].children[year].value,
                    children[time].children[hour].value,
                    children[time].children[minute].value,
                    children[time].children[second].value,
                    children[time].children[ampm].value)
}