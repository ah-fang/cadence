// var timeBtn = document.getElementById("start-btn");

// const getTime = () => {
//     let currentHour = new Date().getHours();
//     let currentMins = new Date().getMinutes();
//     let currentSecs = new Date().getSeconds();

//    let currentTime = currentHour + ":" + currentMins + ":" + currentSecs;

//    console.log(currentTime);
//    return currentTime;
// }

// const showSplits = () => {
//     //display list of times on the page
// }

// timeBtn.addEventListener("click", getTime);

///////////////////////////////////////////////////////////////

var { Timer } = require('lib/easytimer/dist/easytimer.min.js');

var timer = new Timer();
timer.start();

timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});