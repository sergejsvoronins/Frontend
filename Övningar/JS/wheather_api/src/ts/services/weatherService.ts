import axios from "axios";
import { IweatherApi } from "../models/IweatherApi";

export  function getWeather(lat:string, lng:string){
return axios.get<IweatherApi>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5a85d92fd2914d7cfe174e3ac36b29b6&units=metric`)
.then((response)=>{
return response.data
})

} 