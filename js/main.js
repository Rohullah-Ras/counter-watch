// counter
var count = 0;
var counter = document.getElementById("counter");
counter.innerText = count;

var redbutton = document.getElementById("button--red");
redbutton.onclick = function () {
    if (count > -10)
        count -= 1;
    else {
        count = 0;
    }
    counter.innerText = count
}


var greenbutton = document.getElementById("button--green");
greenbutton.onclick = function () {
    if (count < 10)
        count += 1;
    else {
        count = 0
    }
    counter.innerText = count
}

// stopwatch
var minutes = 0;
var seconds = 0;
var everysecond;
var watch = document.getElementById("stopwatch");
watch.innerText = "0" + minutes + ":" + seconds;

var start = document.getElementById("button--start");
start.onclick = function(){
// elke sec iets uitvoeren
everysecond = setInterval(
    function () {
        if (seconds < 60)
            seconds += 1;
        else {
            seconds = 0
            minutes += 1;
        }
        watch.innerText = "0" + minutes + ":"+ seconds;
    }, 1000);
}

var stop = document.getElementById("button--stop");
stop.onclick = function(){
clearInterval(everysecond);
}
