'use strict';
const rutingLocation=(valueSelect)=>{
    const getDestiny = new XMLHttpRequest();
    getDestiny .open('GET', `https://maps.googleapis.com/maps/api/js?key=AIzaSyCeUaZbq5ia_ArGo-r-2bV33u8fvRs1x8k`);
    getDestiny .onload = initMap;
    getDestiny .onerror = handleError;
    getDestiny .send();
  }
function initMap() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let containerMap=document.getElementById('map');
    let map = new google.maps.Map(containerMap,{
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    var onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: ,
      destination:,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
const routing = () => {
console.log("app");
}

routing();
module.exports = routing ;
