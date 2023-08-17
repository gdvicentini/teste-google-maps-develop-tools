//mapType
//maxZoom*
//tileSize*
//name
//minZoom
//alt

//getTile(coord, zoom, docu)
//releaseTile(tile)

//var button = document.querySelector('#satellite');
//button.addEventListener('click', function(){
//    map.setMapTypeId('satellite')
//})

// MeuMapa:
class OverlayMap {
    constructor(tileSize) {
        this.tileSize = tileSize;
    }

    getTile(coord, zoom, ownerDocument) {
        var div = ownerDocument.createElement('div');
        div.style.width = this.tileSize.width + 'px';
        div.style.height = this.tileSize.height + 'px';
        div.style.fontSize = '10px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px';
        div.style.borderColor = '#333';
        return div;
    }
}


var map;
function initMap() {
var mapOptions = {
    center: {lat: -23.665129, lng: -52.6271842},
    zoom: 8
    }
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.overlayMapTypes.insertAt(0, new OverlayMap(new google.maps.Size(256, 256)))
}

//function inserirMapa(url) {
//    let img = document.createElement("img");
//    img.src=url;
//    document.body.appendChild(img);
//}
