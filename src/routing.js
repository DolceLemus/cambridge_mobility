'use strict';
var dataOrigin =
  {
    lat: 52.1725291,
    lng: 0.1340254
  };

var dataDestiny =
  {
    lat: 52.132509,
    lng: 0.1390254
  };

/*const rutingLocation=()=>{
    const getDestiny = new XMLHttpRequest();
    getDestiny .open('GET',`https://maps.googleapis.com/maps/api&key=AIzaSyCeUaZbq5ia_ArGo-r-2bV33u8fvRs1x8k/Json`);
    getDestiny .onload =initMap;
    getDestiny .onerror = handleError;
    getDestiny .send();
  }
  const handleError=() =>{
    console.log('Se ha presentado un error');
  }
*/
function initMap() {
    let directionsService = new google.maps.DirectionsService;
    console.log(directionsService);
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let containerMap=document.getElementById('map');
    let map = new google.maps.Map(containerMap,{
      zoom: 7,
      center: {lat:52.1920702 , lng: 0.1334396}
    });
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService,directionsDisplay);
  }

  function calculateAndDisplayRoute(directionsService,directionsDisplay) {
    directionsService.route({
      origin:dataOrigin,
      destination:dataDestiny,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.getDirections(response);
        console.log(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
  }

  /*
const drawRoutes=(response,status,directionsDisplay)=>{
  if (status === 'OK') {
    directionsDisplay.setDirections(response);
  } else{
    window.alert('Directions request failed ' + status);
  }
}
*/
module.exports = routing;
