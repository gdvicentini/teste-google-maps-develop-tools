let map;

async function initMap() {
    var mapOptions = {
        center: { lat: 37.774546, lng: -122.433523 },
        zoom: 16,
        //mapTypeId: 'satellite'
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //mapa de calor
    const heatmapData = [
        new google.maps.LatLng(37.782, -122.447),
        new google.maps.LatLng(37.782, -122.445),
        new google.maps.LatLng(37.782, -122.443),
        new google.maps.LatLng(37.782, -122.441),
        new google.maps.LatLng(37.782, -122.439),
        new google.maps.LatLng(37.782, -122.437),
        new google.maps.LatLng(37.782, -122.435),
        new google.maps.LatLng(37.785, -122.447),
        new google.maps.LatLng(37.785, -122.445),
        new google.maps.LatLng(37.785, -122.443),
        new google.maps.LatLng(37.785, -122.441),
        new google.maps.LatLng(37.785, -122.439),
        new google.maps.LatLng(37.785, -122.437),
        new google.maps.LatLng(37.785, -122.435)
    ]

    const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        //radius: ,
        map: map
    });

    map.addListener('click', (e) => {
        heatmapData.push(e.latLng);
        heatmap.setData(heatmapData)
    });

    //mapa de tráfego completo
    //new google.maps.TrafficLayer({map});
    
    //mapa de trãnsito
    //let transitLayer = new google.maps.TransitLayer();
    //transitLayer.setMap(map)

    //mapa de trânsito de bicicleta
    let bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map)
}