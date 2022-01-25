class Form {
    constructor() {
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        var dateInput = document.getElementById("dateInput");

        var monthDiv = document.createElement("select");
        monthDiv.id = "month";
        for (let i = 0; i < this.months.length; i++) {
            var option = document.createElement("option")
            option.innerHTML = this.months[i];
            option.value = this.months[i];
            monthDiv.appendChild(option);
        }
        dateInput.appendChild(monthDiv);
        
        var dayDiv = document.createElement("input");
        var yearDiv = document.createElement("input");
        var hourDiv = document.createElement("select");
        for (let i = 0; i < 60; i++) {
            var option = document.createElement("option")
            option.innerHTML = i.toString();
            option.value = i.toString();
            hourDiv.appendChild(option);
        }
        dateInput.appendChild(hourDiv);

        var minDiv = document.createElement("select");
        var secDiv = document.createElement("select");
        var ampmDiv = document.createElement("div");
    }
}

var form = new Form()