'use strict'; //Validate Cp 
//CP=CB2 0AA
$("#search").click(function (event) {
    event.preventDefault();
var cp = $("#input-value").val();
console.log(cp);
var optionSelect = $("#selected").val();
console.log(optionSelect);
    validateCp(cp);
})

// var validateCpCambridge = function validateCpCambridge() {
 

  var validateCp = function validateCp(cp) {
    var regex = /^([A-Za-z]{2}[0-9]{1,2}\s[0-9][A-Za-z]{2})$/;
    console.log(regex);

    if (regex.exec(cp) != null) {
      var cpWithSpace = cp.replace(" ", "%");
      console.log(cpWithSpace);
      getLocationCp(cp);
      console.log("cp correcto");
      return true;
    } else {
      // alert("zip code invalidate");
      console.log("cp incorrecto!!!");
      return false;
    }
  };

  var getLocationCp = function getLocationCp(dataCp) {
    console.log(dataCp);
    var getCpCoords = new XMLHttpRequest();
    getCpCoords.open('GET', "https://maps.googleapis.com/maps/api/geocode/json?address=".concat(dataCp));
    getCpCoords.onload = getGeolocation;
    getCpCoords.onerror = handleError;
    getCpCoords.send();
  }; // Geolocation Function te reforna el objeto !! lat y long


  function getGeolocation() {
    // console.log(this.responseText);
    var data = JSON.parse(this.responseText);
    var results = data.results;
    results.forEach(function (element) {
      console.log(element.geometry.location);
      var ubication = {
        lat: element.geometry.location.lat,
        lng: element.geometry.location.lng
      };
    });
  }

  var handleError = function handleError() {
    console.log('Se ha presentado un error');
  };
// };

module.exports = validateCpCambridge;
