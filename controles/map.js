var map;
function initMap () {
    var mapOptions = {
        center: { lat: -23.665129, lng: -52.6271842 },
        zoom: 6,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_CENTER
        },

        fullscreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        }

        // true desativa os botões de controle do mapa e false mantém
        //disableDefaultUI: true
        // para os controles em separado é o oposto, false que desativa
        //zoomControl: false,
        //streetviewControl: false
        //para mais referências, verificar no link: https://developers.google.com/maps/documentation/javascript/reference/control#FullscreenControlOptions
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions)
}