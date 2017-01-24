var MapWrapper = function(container,coords,zoom){
  var container = document.querySelector("#main-map");
  this.googleMap = new google.maps.Map(container,{
    center: coords,
    zoom: 10
  });
  this.geocoder = new google.maps.Geocoder();
  document.querySelector("button").addEventListener('click',function(){
    geocodeAddress(this.geocoder,this.googleMap);
  }.bind(this));

}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
  var contentString = "blah";  
  var infowindow = new google.maps.InfoWindow({
            content: contentString
          });  
  marker.addListener('click', function() {
              infowindow.open(this.map, marker);
            });  
  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap,"click",function(event){
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      this.addMarker(position);
    }.bind(this));
  },



}