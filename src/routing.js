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

function initMap() {
    let directionsService = new google.maps.DirectionsService;
    console.log(directionsService);
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let containerMap = document.getElementById('map');
    let map = new google.maps.Map(containerMap,{
      zoom: 0.5,
      center: {lat:52.1920702 , lng: 0.1334396}
    });
    directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService,directionsDisplay,map);
  }
  function calculateAndDisplayRoute(directionsService,directionsDisplay,map) {
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
          let address=response.routes[i].summary;
          console.log(address);
         console.log((response));
          let distance=(response.routes[i].legs[0].distance.text);
          console.log(distance);
          let time=(response.routes[i].legs[0].duration.text);
          console.log(time);
          $('#table-routes').append(templateRouts(address,distance,time));
      }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
  }

const templateRouts=(address,distance,time)=>{
  var template='<div class="col-md-10 box-routes text-items-center d-inline m-auto ">'+
      '<h4 class="text-route font-weight-bold mt-2">ROUT</h4>'+
      '<p class="address text-left pl-4">'+address+'</p>'+
      '<p class="distance text-left pl-4">'+distance+'</p>'+
      '<p class="time text-left pl-4">'+time+'</p>'+
  '</div>'+
  '<a class="more col-md-2 b-none  font-weight-bold text-items-center text-center" href="#">More</a>'
return template;  
}
// module.exports = routing;
