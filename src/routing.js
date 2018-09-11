// 'use strict';

// import getGeolocation from './cp'

// var dataOrigin =
//   {
//     lat: 52.1725291,
//     lng: 0.1340254
//   };

// var dataDestiny =
//   {
//     lat: 52.132509,
//     lng: 0.1390254
//   };

function initMap() {
    window.directionsService = new google.maps.DirectionsService;
    console.log(directionsService);
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let containerMap = document.getElementById('map');
    window.map = new google.maps.Map(containerMap,{
      zoom: 0.5,
      center: {lat:52.1920702 , lng: 0.1334396}
    });
    directionsDisplay.setMap(map);

    //calculateAndDisplayRoute(directionsService,directionsDisplay,map);
    // getGeolocation();
  }
  function calculateAndDisplayRoute(dataOrigin, dataDestiny) {
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
  var template=
  `<div class="col-md-10 box-routes text-items-center d-inline m-auto ">
     <h4 class="text-route font-weight-bold mt-2">ROUT</h4>
     <p class="address text-left pl-4">${address}</p>
     <p class="distance text-left pl-4">${distance}</p>
     <p class="time text-left pl-4">${time}</p>
 </div>
 <div class="modal fade left" id="sideModalTLInfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-notify modal-info modal-side modal-top-left" role="document">
        <!--Content-->
        <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
                <p class="heading lead">Informacion de la Ruta</p>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="white-text">&times;</span>
                </button>
            </div>

            <!--Body-->
            <div class="modal-body">
                <div class="text-center">
                  <p class="distance text-left pl-4">Distancia: ${distance}</p>
                  <p class="time text-left pl-4">Tiempo: ${time}</p>
                </div>
            </div>
        </div>
        <!--/.Content-->
    </div>
</div>
<!-- Central Modal Medium Info-->

<div class="text-center">
    <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#sideModalTLInfo">More Info</i></a>
</div>
 `

return template;  
}
// module.exports = routing;
