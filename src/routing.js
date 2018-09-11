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

  function calculateRoute(from, to) {
    // Center initialized to Naples, Italy
    var myOptions = {
      zoom: 10,
      center: new google.maps.LatLng(40.84, 14.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // Draw the map
    var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

    var directionsService = new google.maps.DirectionsService();
    var directionsRequest = {
      origin: from,
      destination: to,
      provideRouteAlternatives: true,
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
    };
    directionsService.route(
      directionsRequest,
      function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
              for (var i = 0, len = response.routes.length; i < len; i++) {
                  new google.maps.DirectionsRenderer({
                      map: mapObject,
                      directions: response,
                      routeIndex: i
                  });
              }
          } else {
              $("#error").append("Unable to retrieve your route<br />");
          }
      }
    );
  }


// const rutingLocation=()=>{
//     const getDestiny = new XMLHttpRequest();
//     getDestiny .open('GET',`https://maps.googleapis.com/maps/api&key=AIzaSyCeUaZbq5ia_ArGo-r-2bV33u8fvRs1x8k/Json`);
//     getDestiny .onload =initMap;
//     getDestiny .onerror = handleError;
//     getDestiny .send();
//   }
//   const handleError=() =>{
//     console.log('Se ha presentado un error');
//   }

// function initMap() {
//     let directionsService = new google.maps.DirectionsService();
//     console.log(directionsService);
//     let directionsDisplay = new google.maps.DirectionsRenderer;
//     let containerMap=document.getElementById('map');
//     let map = new google.maps.Map(containerMap,{
//       zoom: 7,
//       center: {lat:52.1920702 , lng: 0.1334396}
//     });
//     directionsDisplay.setMap(map);
//     calculateAndDisplayRoute(directionsService,directionsDisplay);
//   }


//   // print function
//   function calculateAndDisplayRoute(directionsService,directionsDisplay) {
//     // console.log(directionsDisplay);
//     // console.log(directionsService.route);
//     directionsService.route({
//       origin: dataOrigin,
//       destination: dataDestiny,
//       travelMode: 'DRIVING',
//       provideRouteAlternatives: true
//     }, function(response, status) {
//       var ruta1 = response.routes[0];
//       var ruta2 = response.routes[1];

//       if (status === 'OK') {
//         directionsDisplay.setDirections(response);
//         console.log(response);
//       } else {
//         window.alert('Directions request failed due to ' + status);
//       }
//     })
//   }

  /*
const drawRoutes=(response,status,directionsDisplay)=>{
  if (status === 'OK') {
    directionsDisplay.setDirections(response);
  } else{
    window.alert('Directions request failed ' + status);
  }
}
*/
// module.exports = routing;
