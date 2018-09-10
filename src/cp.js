'use strict';
//Validate Cp 
let cp="CB11AB";
const validateCp=(cp)=>{
    const regex=/^([Cc][Bb]1[0-1][A-Za-z]{2})$/;
        console.log(regex);
    if (regex.exec(cp) != null){
        getGeolocation(cp);
        return true;
    }
    else{
        alert("zip code invalidate");
        return false;
    }      
}
// Geolocation Function
const getGeolocation=(cp)=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(userUbication=(cp)=>{
            let ubication={
                lat:cp.coords.latitude,
                lng:cp.coords.longitude
            }
            console.log(ubication);
            drawMap(ubication);
        });
    }
}

const drawMap=(objUbication)=>{
 let map=new google.maps.Map( )
}
  


module.exports = validateCp;