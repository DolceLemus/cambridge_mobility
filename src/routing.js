'use strict';

const rutingLocation=(valueSelect)=>{
    const getDestiny = new XMLHttpRequest();
    getDestiny .open('GET', `https://maps.googleapis.com/maps/api/js?key=AIzaSyCeUaZbq5ia_ArGo-r-2bV33u8fvRs1x8k`);
    getDestiny .onload = initMap;
    getDestiny .onerror = handleError;
    getDestiny .send();
  }
function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    var onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: document.getElementById('start').value,
      destination: document.getElementById('end').value,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
module.exports = ;