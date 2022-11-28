import axios from "axios";
import { IweatherApi } from "./models/IweatherApi";
import { getWeather } from "./services/weatherService";



navigator.geolocation.getCurrentPosition(success);

function success (position: GeolocationPosition){ 
    const latit = position.coords.latitude;
    const lngit = position.coords.longitude;
    const latStr = latit.toString();
    const lngStr = lngit.toString();
    getWeather(latStr,lngStr).then((weather)=>{
        createHtml(weather);
    })      
}

function createHtml(someData:IweatherApi){

    let container = document.getElementById("mainContainer") as HTMLDivElement;
    let cityEl : HTMLHeadElement = document.createElement("h1");
    container.appendChild(cityEl);
    cityEl.innerHTML = someData.name;
    let tempEl : HTMLParagraphElement = document.createElement("p");
    container.appendChild(tempEl);
    let temp : number = Math.round(someData.main.temp);
    tempEl.innerHTML = "temp: " + temp.toString() + "&deg;";
}

  
  

    






 