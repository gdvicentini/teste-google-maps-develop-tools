let map;

async function initMap() {
    var mapOptions = {
        center: { lat: -23.587044, lng: -46.673794},
        zoom: 10
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    //google.maps.SymbolPath.CIRCLE;
    //google.maps.SymbolPath.BACKWARD_CLOSED_ARROW;
    //google.maps.SymbolPath.FORWARD_CLOSED_ARROW;
    //google.maps.SymbolPath.BACKWARD_OPEN_ARROW;
    //google.maps.SymbolPath.FORWARD_OPEN_ARROW;

    const goldStar = {
        path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z', //path foi copiado do site do google developers
        fillColor: 'yellow',
        fillOpacity: 0.8,
        scale: 1,
        strokeColor: 'gold',
        strokeWeight: 14,
        rotation: 30
    };

    const predefinedIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10
    };
    
    const symbolMarker = new google.maps.Marker({
        position: { lat: -23.587044, lng: -46.673794 },
        map: map,
        icon: predefinedIcon
        //icon: goldStar
    });
}