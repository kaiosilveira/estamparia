function initMap() {

  var center = { lat: -23.6536975, lng: -46.4541716 };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 17
  });

  var marker = new google.maps.Marker({
    position: center,
    map: map
  });

}
