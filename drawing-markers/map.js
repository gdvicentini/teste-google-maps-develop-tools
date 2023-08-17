let map;
const centerMap = { lat: -23.665129, lng: -52.6271842 };

function initMap () {
    var mapOptions = {
        center: centerMap,
        zoom: 10
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    //adicionar
    var marker = new google.maps.Marker({
        position: { lat: -23.665129, lng: -52.6271842 },
        map: map,
        title: 'Centro da Cidade',
        label: '',
        //pegar imagem no https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation: google.maps.Animation.DROP,
        draggable: true
    });

    map.addListener('click', function (e) {
        var clickPosition = e.latLng;
        new google.maps.Marker({
            position: clickPosition,
            map: map,
            title: 'Centro da Cidade',
            label: '',
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            animation: google.maps.Animation.DROP,
            draggable: true
        })
    })

    //remover
    //marker.setMap(null);
}