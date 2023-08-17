let map;
const centerMap = { lat: -23.665129, lng: -52.6271842 };

function initMap () {
    var mapOptions = {
        center: centerMap,
        zoom: 10
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    map.addListener('zoom_changed', function () {
        console.log('mudou o zoom')
    })

    map.addListener('click', function () {
        console.log(e)
    })

    map.addListener('dbclick', function () {
        console.log('clique duplo')
    })
}