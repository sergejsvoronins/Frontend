



let openBtnEl : HTMLButtonElement = document.getElementById("openBtn") as HTMLButtonElement;
let closeBtnEl : HTMLButtonElement = document.getElementById("closeBtn") as HTMLButtonElement;
let backBtnEl : HTMLButtonElement = document.getElementById("backBtn") as HTMLButtonElement;
let forwardBtnEl : HTMLButtonElement = document.getElementById("forwardBtn") as HTMLButtonElement;
let timerBtnEl : HTMLButtonElement = document.getElementById("timerBtn") as HTMLButtonElement;
let timerIntevalBtnEL : HTMLButtonElement = document.getElementById("timeIntervalBtn") as HTMLButtonElement;
let stopIntevalBtnEL : HTMLButtonElement = document.getElementById("stopIntervalBtn") as HTMLButtonElement;


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
    setTimeout(()=>{
        console.log("Funktionen körd");
    }, 1000)

}
let interval = 0;
function timeInterval (){
    interval = setInterval(()=>{
        console.log("Funktionen körd");
    }, 500);
}
function stopInterval (stop:number){
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

class Loc {
    constructor(public lat:number, public lng:number){
    }
}


if(window.navigator){
   navigator.geolocation.getCurrentPosition(success);

}
else {
    console.log("Uppdatera webbläsaren")
}
// : { coords: { latitude: number; longitude: number; }; 
function success (position: GeolocationPosition){
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
let locations : Loc [] = [];
 function successWatch (position: { coords: { latitude: number; longitude: number; }; }){

    let currentPosition : Loc = new Loc(position.coords.latitude, position.coords.longitude);
    locations.push(currentPosition);
    console.log(locations);
 }