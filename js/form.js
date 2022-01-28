const month = 0;
const day = 1;
const year = 2;
const time = 3;
const submit = 4;

const hour = 0;
const minute = 1;
const second = 2;
const ampm = 3;

class Form {
    constructor() {
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        this.divs = [];

        this.dateInput = document.getElementById("dateInput");
    }

    createDivs() {
        var monthDiv = document.createElement("select");
        this.divs.push(monthDiv);

        var dayDiv = document.createElement("input");
        this.divs.push(dayDiv);

        var yearDiv = document.createElement("input");
        this.divs.push(yearDiv);

        var timeDiv = document.createElement("article");
        
        var hourDiv = document.createElement("select");
        var minuteDiv = document.createElement("select");
        var secondDiv = document.createElement("select");
        var ampmDiv = document.createElement("select");

        timeDiv.appendChild(hourDiv);
        timeDiv.appendChild(minuteDiv);
        timeDiv.appendChild(secondDiv);
        timeDiv.appendChild(ampmDiv);

        this.divs.push(timeDiv);

        var submitButton = document.createElement("button");
        this.divs.push(submitButton);
    }
        
    populateConstantDivs() {
        for (let i = 0; i < this.months.length; i++) {
            var option = document.createElement("option")
            option.innerHTML = this.months[i];
            option.value = this.months[i];
            this.divs[month].appendChild(option);
        }
        
        this.divs[day].type = "text";
        this.divs[day].placeholder = "Day of the month...";
    
        this.divs[year].type = "text";
        this.divs[year].placeholder = "Year..."
    
        for (let i = 1; i <= 12; i++) {
            var option = document.createElement("option")
            option.innerHTML = i.toString();
            option.value = i.toString();
            this.divs[time].children[hour].appendChild(option);
        }
        
        for (let i = 0; i < 60; i++) {
            var option = document.createElement("option")
            option.innerHTML = addLeadingZeroToLength(2,i.toString());
            option.value = addLeadingZeroToLength(2,i.toString());
            this.divs[time].children[minute].appendChild(option);
        }

        for (let i = 0; i < 60; i++) {
            var option = document.createElement("option")
            option.innerHTML = addLeadingZeroToLength(2,i.toString());
            option.value = addLeadingZeroToLength(2,i.toString());
            this.divs[time].children[second].appendChild(option);
        }
        
        for (let i = 0; i < 2; i++) {
            var option = document.createElement("option")
            option.innerHTML = ["AM","PM"][i];
            option.value = ["AM","PM"][i];
            this.divs[time].children[ampm].appendChild(option);
        }
        
        this.divs[submit].onclick = function() {
            updateDate();
        }
        this.divs[submit].innerHTML = "Submit";
    }

    applyDivsToDateInput() {
        for (let i = 0; i<this.divs.length; i++) {
            this.dateInput.appendChild(this.divs[i]);
        }
    }

    hide() {

    }

    show() {
        
    }
}

function addLeadingZeroToLength(x, str) {
    while (str.length < x)
        str = "0" + str;
    return str;
}

var form = new Form();
form.createDivs();
form.populateConstantDivs();
form.applyDivsToDateInput();