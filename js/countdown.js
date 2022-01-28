var Target = new TargetDate();

function createDivs() {
    var dayDiv = document.createElement("div");
    dayDiv.id = "days"
    document.getElementById("demo").appendChild(dayDiv)

    var hourDiv = document.createElement("div");
    hourDiv.id = "hours"
    document.getElementById("demo").appendChild(hourDiv)

    var minuteDiv = document.createElement("div");
    minuteDiv.id = "minutes"
    document.getElementById("demo").appendChild(minuteDiv)

    var secondDiv = document.createElement("div");
    secondDiv.id = "seconds"
    document.getElementById("demo").appendChild(secondDiv)
}

function setup() {

    createDivs();

    // Update the count down every 1 second
    var x = setInterval(function() {
        document.getElementById("title").innerHTML = "Countdown to...<br/>" + Target.str;
        // Set the date we're counting down to
        var countDownDate = new Date(Target.str).getTime();

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        var dayString = twoDigit(days) + " Days";
        var hourString = twoDigit(hours) + " Hours";
        var minuteString = twoDigit(minutes) + " Minutes";
        var secondString = twoDigit(seconds) + " Seconds";

        if (document.getElementById("days").innerHTML != dayString) {
            document.getElementById("days").innerHTML = dayString;
        }
        if (document.getElementById("hours").innerHTML != hourString) {
            document.getElementById("hours").innerHTML = hourString;
        }
        if (document.getElementById("minutes").innerHTML != minuteString) {
            document.getElementById("minutes").innerHTML = minuteString;
        }

        document.getElementById("seconds").innerHTML = secondString;
        
        // If the count down is finished, write some text
        //if (distance < 0) {
        //    document.getElementById("demo").innerHTML = "EXPIRED";
        //}
    }, 1000);
}

function twoDigit(x) {
    var str = x.toString();
    if (str.length == 1) {
        return str + " ";
    } else {
        return str;
    }
}

setup()