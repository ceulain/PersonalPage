   'use strict'
    var myLoc = new google.maps.LatLng(43.618449899999995,7.0763554);
    function initialize() {




        var mapOptions = {
           center: myLoc,
           zoom: 5,
           mapTypeId : google.maps.MapTypeId.ROADMAP
       };

       var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

       var marker = new google.maps.Marker({
           position : myLoc
       });

       marker.setMap(map);

       var infoWindow = new google.maps.InfoWindow({
        content : "Where i'm living"
       });

       infoWindow.open(map,marker);


   }
   google.maps.event.addDomListener(window, 'load', initialize);
