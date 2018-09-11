'use strict';
//Validate
//CP=CB2 OAA
var data = [
    {
      lat: 52.132509,
      lng: 0.1390254,
      "name": "Babraham Research",
      "description": "Cambridge CB22 3AT, UK"
    },
    {
      lat: 52.1725291,
      lng: 0.1340254,
      "name": "Cambridge Biomedical",
      "description": "Cambridge CB2 0AA, UK",
    },
    {
      lat: 52.1920702,
      lng: 0.1334396,
      "name": "Central Cambridge",
      "description": "Hills Rd, Cambridge CB2 1RY, UK",
    },
    {
      lat: 52.176906,
      lng: 0.135590,
      "name": "CR:UK ",
      "description": "University of Cambridge, Robinson Way, Cambridge CB2 0RE, UK",
    },
    {
      lat: 52.2345228,
      lng: 0.1397953,
      "name": "Darwin",
      "description": "Milton Rd, Milton, Cambridge CB4 0WG, UK",
    },
    {
      lat: 52.08758,
      lng: 0.0260976,
      "name": "Da Vinci",
      "description": "Melbourn, Royston SG8 6EE, UK",
    },
    {
      lat: 52.1182187,
      lng: 0.2282319,
      "name": "Granta Park",
      "description": "Great Abington, Cambridge CB21 6AD, UK",
    },
    {
      lat: 52.0540702,
      lng: 0.209985,
      "name": "Hodgkin",
      "description": "Saffron Walden CB10 1TS, UK",
    }
  ]

$("#search").click(function (event) {
    event.preventDefault();
    var cp = $("#input-value").val();
    console.log(cp);
    var optionSelect = $("#selected").val();
    campusSelected(optionSelect);
    console.log(optionSelect);
    validateCp(cp);

    
})

const campusSelected=()=>{
    var optionSelect = $("#selected").val();
    console.log(optionSelect)
    console.log(data);
    for(var i=0;i<data.length;i++){
      var campus= data[i].name;
      if(optionSelect == campus) {
       window.dataDestiny =
       {
         lat: data[i].lat,
         lng: data[i].lng
       };
      }
    }
     console.log(dataDestiny);
}


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



