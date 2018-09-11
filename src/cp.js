'use strict';
//Validate Cp 
//CP=CB2 0AA
var dataOrigin = window.ubication;

$("#search").click(function (event) {
    event.preventDefault();
    var cp = $("#input-value").val();
    console.log(cp);
    var optionSelect = $("#selected").val();
    console.log(optionSelect);
    validateCp(cp);

    
})



const validateCp = (cp) => {
    const regex = /^([A-Za-z]{2}[0-9]{1,2}\s[0-9][A-Za-z]{2})$/;
    console.log(regex);
    if (regex.exec(cp) != null) {
        let cpWithSpace = cp.replace(" ", "%");
        console.log(cpWithSpace);
        getLocationCp(cp);
        console.log("cp correcto");
        return true;        
    }
    else {
        // alert("zip code invalidate");
        console.log("cp incorrecto!!!");
        return false;
        
    }
}
const getLocationCp = (dataCp) => {
    console.log(dataCp);
    const getCpCoords = new XMLHttpRequest();
    getCpCoords.open('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=${dataCp}`);
    getCpCoords.onload = getGeolocation;
    getCpCoords.onerror = handleError;
    getCpCoords.send();
}
// Geolocation Function te reforna el objeto !! lat y long
function getGeolocation() {
    let ubication;
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    let results = data.results;
    results.forEach(element => {
        console.log(element.geometry.location);
        ubication = {
            lat: element.geometry.location.lat,
            lng: element.geometry.location.lng
        }

    });
    calculateAndDisplayRoute(ubication, dataDestiny);
}
const handleError = () => {
    console.log('Se ha presentado un error');
}

// console.log(ubication);



