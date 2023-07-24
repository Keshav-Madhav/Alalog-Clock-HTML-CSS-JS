let hourStroke = document.getElementById('hour-stroke');
let minuteStroke = document.getElementById('minute-stroke');
let secondStroke = document.getElementById('second-stroke');
let secondDot = document.querySelector('.second-dot');
let minuteDot = document.querySelector('.minute-dot');
let hourDot = document.querySelector('.hour-dot');
let hourHand = document.getElementById('hour-hand');
let minuteHand = document.getElementById('minute-hand');
let secondHand = document.getElementById('second-hand');

function updateClock() {
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();
    let currentMillisecond = now.getMilliseconds();

    // Calculate the current time in hours, including minutes and seconds
    let currentTimeInHours = currentHour + currentMinute / 60 + currentSecond / 3600;

    // Update the strokeDashoffset for the hour hand
    hourStroke.style.strokeDashoffset = -(510 * currentTimeInHours) / 12;

    // Update the strokeDashoffset for the minute hand
    minuteStroke.style.strokeDashoffset = 630 - (630 * (currentMinute + currentSecond / 60)) / 60;

    // Update the strokeDashoffset for the second hand
    secondStroke.style.strokeDashoffset = 760 - (760 * (currentSecond + currentMillisecond / 1000)) / 60;

    // Update the rotation of the dots
    secondDot.style.transform = `rotateZ(${(currentSecond + currentMillisecond / 1000) * 6}deg)`;
    minuteDot.style.transform = `rotateZ(${(currentMinute + currentSecond / 60) * 6}deg)`;
    hourDot.style.transform = `rotateZ(${currentTimeInHours * 30}deg)`;

    // Update the rotation of the hands
    hourHand.style.transform = `rotateZ(${currentTimeInHours * 30}deg)`;
    minuteHand.style.transform = `rotateZ(${(currentMinute + currentSecond / 60) * 6}deg)`;
    secondHand.style.transform = `rotateZ(${(currentSecond + currentMillisecond / 1000) * 6}deg)`;

    requestAnimationFrame(updateClock);
}

updateClock();
