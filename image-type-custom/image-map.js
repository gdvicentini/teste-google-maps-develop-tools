var map;
function initMap() {
    var mapOptions = {
        center: {lat: -23.665129, lng: -52.6271842},
        zoom: 8,
        mapTypeControlOptions: {
            mapTypeIds: ['osm']
        }
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //ImageMapType
    var imageMapType = new google.maps.ImageMapType({
        tileSize: new google.maps.Size(256, 256),
        getTileUrl: function(coord, zoom) {
            return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
            
        },
        maxZoom: 18,
        name: 'Open Street Map'
    });

    map.mapTypes.set('osm', imageMapType)
    map.setMapTypeId('osm');
}