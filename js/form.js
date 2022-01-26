class Form {
    constructor() {
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        var dateInput = document.getElementById("dateInput");

        var monthDiv = document.createElement("select");
        for (let i = 0; i < this.months.length; i++) {
            var option = document.createElement("option")
            option.innerHTML = this.months[i];
            option.value = this.months[i];
            monthDiv.appendChild(option);
        }
        dateInput.appendChild(monthDiv);
        
        var dayDiv = document.createElement("input");
        dayDiv.type = "text";
        dayDiv.placeholder = "Day of the month...";
        dateInput.appendChild(dayDiv);

        var yearDiv = document.createElement("input");
        yearDiv.type = "text";
        yearDiv.placeholder = "Year..."
        dateInput.appendChild(yearDiv);

        var timeDiv = document.createElement("article");
        
        var section1 = document.createElement("section");
        var hourDiv = document.createElement("select");
        for (let i = 1; i <= 12; i++) {
            var option = document.createElement("option")
            option.innerHTML = i.toString();
            option.value = i.toString();
            hourDiv.appendChild(option);
        }
        section1.appendChild(hourDiv);

        var section2 = document.createElement("section");
        var minuteDiv = document.createElement("select");
        for (let i = 0; i < 60; i++) {
            var option = document.createElement("option")
            option.innerHTML = addLeadingZeroToLength(2,i.toString());
            option.value = addLeadingZeroToLength(2,i.toString());
            minuteDiv.appendChild(option);
        }
        section2.appendChild(minuteDiv);

        var section3 = document.createElement("section");
        var secondDiv = document.createElement("select");
        for (let i = 0; i < 60; i++) {
            var option = document.createElement("option")
            option.innerHTML = addLeadingZeroToLength(2,i.toString());
            option.value = addLeadingZeroToLength(2,i.toString());
            secondDiv.appendChild(option);
        }
        section3.appendChild(secondDiv);
        
        var section4 = document.createElement("section");
        var ampmDiv = document.createElement("select");
        for (let i = 0; i < 2; i++) {
            var option = document.createElement("option")
            option.innerHTML = ["AM","PM"][i];
            option.value = ["AM","PM"][i];
            ampmDiv.appendChild(option);
        }
        section4.appendChild(ampmDiv);
        
        timeDiv.appendChild(section1);
        timeDiv.appendChild(section2);
        timeDiv.appendChild(section3);
        timeDiv.appendChild(section4);

        dateInput.appendChild(timeDiv);

        var submitButton = document.createElement("button");
        submitButton.onclick = function() {
            updateDate();
        }
        submitButton.innerHTML = "Submit";
        dateInput.appendChild(submitButton);
    }
}

function addLeadingZeroToLength(x, str) {
    while (str.length < x)
        str = "0" + str;
    return str;
}

var form = new Form()