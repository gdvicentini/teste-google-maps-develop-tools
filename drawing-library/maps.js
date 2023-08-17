let map;

const initDrawing = (map) => {
    let drawingManager = new google.maps.drawing.DrawingManager ({
        map: map,
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
        },
        circleOptions: {
            fillColor: '#FF0000',
            editable: true,
            draggable: true
        },
        polygonOptions: {
            fillColor: '#FF0000'
        },
        rectangleOptions: {
            fillColor: '#FF0000'
        },
        polylineOptions: {
            strokeColor: '#FF0000'
        },
    });

    google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
        console.log(event);
    });
}

async function initMap() {
    var mapOptions = {
        center: { lat: 37.774546, lng: -122.433523 },
        zoom: 16,
        //mapTypeId: 'satellite'
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    initDrawing(map)
}