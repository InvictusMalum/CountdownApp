const date = 0;
const time = 1;
const submit = 2;

const month = 0;
const day = 1;
const year = 2;

const hour = 0;
const minute = 1;
const second = 2;
const ampm = 3;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function populateDays() {
    var dateInput = document.getElementById("dateInput");
    dateInput.children[date].children[day].innerHTML = '';
    
    dayNums = monthLengths[months.indexOf(dateInput.children[date].children[month].value)];
    for (let i = 1; i <= dayNums; i++) {
        var option = document.createElement("option");
        option.innerHTML = i.toString();
        option.value = i.toString();
        dateInput.children[date].children[day].appendChild(option);
    }
}

class Form {
    constructor() {
        this.divs = [];

        this.dateInput = document.getElementById("dateInput");
    }

    createDivs() {
        var dateDiv = document.createElement("article");

        var monthDiv = document.createElement("select");
        var dayDiv = document.createElement("select");
        var yearDiv = document.createElement("input");
        dateDiv.appendChild(monthDiv);
        dateDiv.appendChild(dayDiv);
        dateDiv.appendChild(yearDiv);
        this.divs.push(dateDiv);


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
        for (let i = 0; i < months.length; i++) {
            var option = document.createElement("option")
            option.innerHTML = months[i];
            option.value = months[i];
            this.divs[date].children[month].appendChild(option);
        }
        this.divs[date].children[month].addEventListener('input', populateDays);
        
        this.divs[date].children[year].type = "text";
        this.divs[date].children[year].placeholder = "Year..."
    
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
populateDays();