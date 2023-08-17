let map;
const centerMap = { lat: -23.665129, lng: -52.6271842 };

function initMap () {
    var mapOptions = {
        center: centerMap,
        zoom: 10
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    //marcador
    const marker = new google.maps.Marker({
        position: { lat: -23.665129, lng: -52.6271842 },
        map: map,
        title: 'Centro da Cidade',
        label: '',
        //pegar imagem no https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation: google.maps.Animation.DROP,
        draggable: true
    });

    let infoWindow = new google.maps.InfoWindow({
        content: '<div class="infowindow"><h2>MEU INFOWINDOW</h2>',
        //position: ,
        maxWidth: 200
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    })

}