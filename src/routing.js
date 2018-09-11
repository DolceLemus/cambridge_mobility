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

function initMap() {
    let directionsService = new google.maps.DirectionsService;
    console.log(directionsService);
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let containerMap = document.getElementById('map');
    let map = new google.maps.Map(containerMap,{
      zoom: 7,
      center: {lat:52.1920702 , lng: 0.1334396}
    });
    directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService,directionsDisplay,map);
  }
  // print function
  function calculateAndDisplayRoute(directionsService,directionsDisplay,map) {
    // console.log(directionsDisplay);
    // console.log(directionsService.route);
    directionsService.route({
      origin: dataOrigin,
      destination: dataDestiny,
      travelMode: 'DRIVING',
      provideRouteAlternatives: true
    }, function(response, status){
      if (status === 'OK') {
        for (var i = 0, len = response.routes.length; i < len; i++) {
          new google.maps.DirectionsRenderer({
              map: map,
              directions: response,
              routeIndex: i
          });
          response.DirectionsResult;
          console.log(response.routes[i].legs[0]);
      }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
  }

const templateRouts=(routeText)=>{
  var template='<div class="row routes text-items-center text-center pt-2 pb-2 mr-2 mñ-2">'+
  '<div class="col-md-10 box-routes text-items-center d-inline m-auto ">'+
      '<h4 class="text-route font-weight-bold mt-2">ROUT</h4>'+
      '<p class="address text-left pl-4">'+address+'</p>'+
      '<p class="distance text-left pl-4">'+distance+'</p>'+
      '<p class="time text-left pl-4">'+time+'</p>'+
  '</div>'+
  '<a class="more col-md-2 b-none  font-weight-bold text-items-center text-center" href="#">More</a>'+
'</div>'
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
// module.exports = routing;
