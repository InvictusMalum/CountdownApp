function updateDate() {
    var dateInput = document.getElementById("dateInput");
    var children = dateInput.children;
    Target.SetValues(children[0].value,
                    children[1].value,
                    children[2].value,
                    children[3].children[0].children[0].value,
                    children[3].children[1].children[0].value,
                    children[3].children[2].children[0].value,
                    children[3].children[3].children[0].value)
}