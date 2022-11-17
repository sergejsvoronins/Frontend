



let openBtnEl = document.getElementById("openBtn");
let closeBtnEl = document.getElementById("closeBtn");
let backBtnEl = document.getElementById("backBtn");
let forwardBtnEl = document.getElementById("forwardBtn");
let timerBtnEl = document.getElementById("timerBtn");
let timerIntevalBtnEL = document.getElementById("timeIntervalBtn");
let stopIntevalBtnEL = document.getElementById("stopIntervalBtn");


function newPage(){
    window.open("http://localhost:1234/");
}
function closePage(){
    window.close();
}
function lastPage(){
    history.back();
}
function nextPage(){
    history.forward();
}

function timer (){
    let timer =  setTimeout(()=>{
        console.log("Funktionen körd");
    }, 1000)

}
let interval = 0;
function timeInterval (){
    interval = setInterval(()=>{
        console.log("Funktionen körd");
    }, 500);
}
function stopInterval (stop){
    clearInterval(stop);
}



openBtnEl.addEventListener("click",newPage);
closeBtnEl.addEventListener("click",closePage);
backBtnEl.addEventListener("click",lastPage);
forwardBtnEl.addEventListener("click",nextPage);
timerBtnEl.addEventListener("click",timer);
timerIntevalBtnEL.addEventListener("click", timeInterval);
stopIntevalBtnEL.addEventListener("click", ()=>{
    stopInterval(interval);
});

class Location {
    constructor(a,b){
        this.lat = a;
        this.lng = b;
    }
}


if(window.navigator){
   navigator.geolocation.getCurrentPosition(success);
}
else {
    console.log("Uppdatera webbläsaren")
}

function success (position){
    const lat = position.coords.latitude;
    const lnt = position.coords.longitude;
    console.log(lat, lnt);
}

if(window.navigator){
    navigator.geolocation.watchPosition(successWatch);
 }
 else {
     console.log("Uppdatera webbläsaren")
 }
let locations = [];
 function successWatch (position){

    let currentPosition = new Location(position.coords.latitude, position.coords.longitude);
    locations.push(currentPosition);
    console.log(locations);
 }