
var initialize = function(){
  var centre = {lat: 51.507351, lng: -0.127758}
  var mapDiv = document.querySelector("#main-map")
  var mainMap = new MapWrapper(mapDiv,centre,10);
  mainMap.addMarker(centre);
  mainMap.addMarker({lat: 51.500909, lng: -0.177366})
  mainMap.addClickEvent();
  
}

function geocodeAddress(geocoder, resultsMap) {
        var address = document.querySelector('input').value;
        geocoder.geocode({'address': address}, function(results, status) {
          console.log("results map "+resultsMap);
     
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }


// window.eqfeed_callback = function(results){
//   var container = document.querySelector("#main-map");

//   for (var i = 0; i < results.features.length; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.latLng(coords[1],coords[0]);
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map;
//     });
//   }
// }

window.onload = initialize;

