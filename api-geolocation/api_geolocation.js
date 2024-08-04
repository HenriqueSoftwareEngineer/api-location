if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(function(position){
    showMap(position);
   }, function(error){
    onError(error);
   });

   function showMap(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: latitude, lng: longitude },
      zoom: 8
    });

    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: 'VOCÊ ESTÁ AQUI'
    });
   }

   function onError(error){
     console.error('Erro ao obter a localização: ', error);
   }
}   
