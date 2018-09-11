'use strict';
//Validate Cp 
const validateCp=()=>{
    let cp="CB22 3AT";
    const regex=/^([A-Za-z]{2}[0-9]{1,2}\s[0-9][A-Za-z]{2})$/;
        console.log(regex);
    if (regex.exec(cp) != null){
        let cpWithSpace=cp.replace(" ","%20");
        console.log(cpWithSpace);
        getLocationCp(cp);
        return true;
    }
    else{
        alert("zip code invalidate");
        return false;
    }      
}
const getLocationCp=(dataCp)=>{
    const getCpCoords = new XMLHttpRequest();
    getCpCoords.open('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=${dataCp}`);
    getCpCoords.onload = getGeolocation;
    getCpCoords.onerror = handleError;
    getCpCoords.send();
  }
// Geolocation Function
function getGeolocation(){
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    let results=data.results;
    results.forEach(element => {
       console.log(element.geometry.location);
       let ubication={
        lat:element.geometry.location.lat,
        lng:element.geometry.location.lng
        }
        drawMap(ubication)
    });
}
const handleError=() =>{
    console.log('Se ha presentado un error');
  }

const drawMap=(objUbication)=>{
    let containerMap=document.getElementById("map");
    console.log(objUbication);
 let map=new google.maps.Map(containerMap,{
        center:objUbication,
        zoom:4
 })
 let cpMaker=new google.maps.Marker({
     position:objUbication,
     title:"CP"
 })
    return cpMaker.setMap(map);
}

  
validateCp();

module.exports = validateCp;



