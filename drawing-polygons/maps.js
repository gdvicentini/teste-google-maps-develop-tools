let map;

function initMap() {
    var mapOptions = {
        center: { lat: 24.886, lng: -70.268},
        zoom: 5
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    var triangleCoords = [
        { lat: 25.774, lng: -80.190 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 34.321, lng: -80.757 }
    ];

    let inner = [{"lat":27.79978430387008,"lng":-76.9916328125},{"lat":31.652971808671683,"lng":-77.29925},{"lat":29.802100372984423,"lng":-69.03753125},{"lat":24.16636308580109,"lng":-68.422296875}];

    // Construct the polygon:
    var bermudaTriangle = new google.maps.Polygon({
        //paths: triangleCoords
        paths: [triangleCoords, inner], //--reverse não vai criar um buraco
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        editable: true,
        fillOpacity: 0.35,
        geodesic: true, //--faz as linhas ficarem mais curvadas para seguir o raio da terra
    });
    bermudaTriangle.setMap(map);

    let vertices = bermudaTriangle.getPath();
    for (let i = 0; i < vertices.getLength(); i++) {
        let vertex = vertices.getAt(i);
        console.log({
            lat: vertex.lat(),
            lng: vertex.lng(),
        })
    };

    new google.maps.Marker({
        position: { lat: 34.321, lng: -80.757 },
        map: map,
        title: 'OUTRO PONTO',
        animation: google.maps.Animation.DROP,
        draggable: true
    });

    new google.maps.Marker({
        position: { lat: 25.774, lng: -80.193 },
        map: map,
        label: 1,
    });

    new google.maps.Marker({
        position: { lat: 18.466, lng: -66.118 },
        map: map,
        label: 2,
    });

    let clickedPos = []
    bermudaTriangle.addListener('click', function (e) {
        var clickPosition = e.latLng;
        clickedPos.push({ lat: clickPosition.lat(), lng: clickPosition.lng() });
        if(clickedPos.length === 4) {
            console.log(JSON.stringify(clickedPos));
            clickedPos = [];
        }
    });
}