import { IweatherData } from "./IweatherData"


export interface IweatherApi {
    main: IweatherData,
    name: string
}