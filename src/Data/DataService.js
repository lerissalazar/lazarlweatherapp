import { prod, dev } from "./Environment";

let apiKey = "&units=imperial&APPID=";
if(prod.isLive){
    apiKey += prod.apiKey;
}else {
    apiKey += dev.apiKey;
}

async function WeatherApp (typeCity){  
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + typeCity + apiKey;
    const result = await fetch(url)
    const weatherData = await result.json();
    console.log(weatherData)
    return weatherData;
}

async function ForecastApp (typeCity){
    const url = "http://api.openweathermap.org/data/2.5/forecast?q=" + typeCity + apiKey
    const result = await fetch(url)
    const forecastData = await result.json();
    console.log(forecastData)
    return forecastData;
}

export {WeatherApp, ForecastApp}