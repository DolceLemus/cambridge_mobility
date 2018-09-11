
'use strict';
/*
var dataOrigin =
  {
    lat: 52.1725291,
    lng: 0.1340254
  };
 
  
  var dataDestiny={};

  $("#search").click(function (event) {
    event.preventDefault();
    
})
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
*/
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
          console.log(response.routes);
          response.DirectionsResult;
          
          let address=response.routes[i].summary;
          // console.log(address);
          // console.log((response));
          let distance=(response.routes[i].legs[0].distance.text);
          // console.log(distance);
          let time=(response.routes[i].legs[0].duration.text);
          console.log(time);
          let addressStart = (response.routes["0"].legs["0"].start_address);
          let addressEnd = (response.routes["0"].legs["0"].end_address);
          $('#table-routes').append(templateRouts(address,distance,time,addressStart,addressEnd));
      }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
  }

const templateRouts=(address,distance,time,addressStart,addressEnd)=>{
  var template=`<div class="col-md-12 font-weight-bold box-routes d-inline mb-2 pb-16 pt-8">
      <a class="more-details btn btn.rounded btn-link btn-sm b-none font-weight-bold text-items-center text-center pull-right" data-toggle="modal" data-target="#sideModalTLInfo">More Details<i class="fa fa-arrow-right pl-2" aria-hidden="true"></i></a>
      <h4 class="address text-left pl-4"><i class="fa fa-map-marker pr-2" aria-hidden="true"></i>${address}</h4>
      <span class="distance pl-4">${distance}</span>
      <span class="time pl-4">${time}</span>
  </div>
  
 <div class="modal fade left" id="sideModalTLInfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-notify modal-info modal-side modal-top-left" role="document">
        <!--Content-->
        <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
                <p class="heading lead">Route Information</p>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="white-text">&times;</span>
                </button>
            </div>

            <!--Body: Card-->
            <div class="modal-body">
                <div class="text-center">
                  <p class="distance text-left pl-4">Distancia: ${distance}</p>
                  <p class="time text-left pl-4">Tiempo: ${time}</p>
                  <p class="time text-left pl-4">Dirección de Origen: ${addressStart}</p> 
                  <p class="time text-left pl-4">Dirección de Llegada: ${addressEnd}</p>                  
                </div>
            </div>
        </div>

    </div>
</div>
<!-- Central Modal Medium Info-->`

return template;  
}
// module.exports = routing;
