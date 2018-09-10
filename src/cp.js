
//Validate Cp 

const validateCp=()=>{
    let cp="CB10AP";
    const regex=/^([Cc][Bb]1[0-1][A-Za-z]{2})$/;
        console.log(regex);
    if (regex.exec(cp) != null){
        getLocationCp(cp);
        return true;
    }
    else{
        alert("zip code invalidate");
        return false;
    }      
}

const getLocationCp=(dataCp)=>{
    let address="CB223AT"
    
    const getCpCoords = new XMLHttpRequest();
    getCpCoords.open('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=CB7%204BS&key=AIzaSyCeUaZbq5ia_ArGo-r-2bV33u8fvRs1x8k`);
    getCpCoords.onload = getGeolocation;
    getCpCoords.onerror = handleError;
    getCpCoords.send();
  }
// Geolocation Function
function getGeolocation(){
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    
    /*if(navigator.geolocation){
        navigator.geolocation.getcurrentposition(userUbication=()=>{
            let ubication={
                lat:cp.coords.latitude,
                lng:cp.coords.longitude
            }
            console.log(ubication);
            drawMap(ubication);
        }
    }*/
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