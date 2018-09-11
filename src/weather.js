'use strict';

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lang=ar&units=metric";
const apiKey = "97e033a0845192c037bb0727a4611445";
var geoLocationDetails = "lat=52.205067&lon=0.107760";

function buildApiUrl(){
    var url = apiUrl + "&" + geoLocationDetails + "&APPID=" + apiKey; 
    console.log(url);
    return url;
}

window.addEventListener('load', e =>{
    getLocation();
    getWeather();
});
async function getWeather() {
    const res = await fetch(buildApiUrl());
    const json = await res.json();
    document.getElementById("city").innerText = json.name;
    document.getElementById("temp").innerText = json.main.temp;
    document.getElementById("city2").innerText = json.name;
    document.getElementById("temp2").innerText = json.main.temp;
    console.log(json);
}
// Get location from users browser
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(currentPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function currentPosition(position) {
    geoLocationDetails = "lat="+ position.coords.latitude  + "&lon="+position.coords.longitude;
  }