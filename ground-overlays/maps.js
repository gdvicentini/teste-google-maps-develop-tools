let map;

async function initMap() {
    var mapOptions = {
        center: { lat: 40.740, lng: -74.18 },
        zoom: 13
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    //é possível colocar uma imagem própria no local, adicionando no link abaixo ou colocando o patch do arquivo
    // const itsMeMario = 'https://'

    let imageBounds = {
        north: 40.773941,
        south: 40.712216,
        east: -74.12544,
        west: -74.22655
    };

    // Class google.maps.GroundOverlay(imageUrl, bound [, options])
    // Class GroundOverlayOptions { clickable: boolean, map: google.maps.Map, opacity: number}

    //comando para adicionar a imagem sobreposta sobre a superfície
    //o link abaixo pode ser substituido pelo comando acima itsMeMario
    const historicalOverlay = new google.maps.GroundOverlay(
        'https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg', imageBounds, {
            map: map,
            opacity: 0.5,
            clickable: true
        });
    
    //historicalOverlay.setMap(map)
    historicalOverlay.addListener('click', function (e) {
        alert('Clicou');
        historicalOverlay.setMap(null) //ao clicar, o mapa vai sumir
    });

}