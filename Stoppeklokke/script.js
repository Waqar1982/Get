const app = document.getElementById('app');
const rundeTime = document.getElementById('lastRound');
let seconds = 0;
var timer;



function startTimer(){
  setInterval(countSeconds, 1000);
}

function countSeconds(){
    app.innerHTML = seconds;
    seconds++;
}

function pauseTimer(){ 
    rundeTime.innerHTML += `<li>${seconds-1} sekunder</li>`;
    clearInterval(timer);
    seconds = 0;
}

function stopTimer(){
    location.reload()
}

