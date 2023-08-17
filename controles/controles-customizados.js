let map;
const centerMap = { lat: -23.665129, lng: -52.6271842 };

// Recomendado pelo google:
//CSS
//Interação
//{div -> controle
    //div -> UI
        //div -> text
//}

class CenterControl {
    constructor(map) {
        this.controlDiv = document.createElement('div');
        this.controlUI = document.createElement('div');
        this.controlText = document.createElement('div');

        this.controlUI.style.backgroundColor = '#fff';
        this.controlUI.style.border = '2px solid #ebebeb';
        this.controlUI.style.borderRadius = '3px';
        this.controlUI.style.padding = '6px';
        this.controlUI.title = 'Centralizar mapa';

        this.controlDiv.appendChild(this.controlUI);

        this.controlText.style.fontSize = '16px';
        this.controlText.style.textAlign = 'center';
        this.controlText.style.lineHeight = '20px';
        this.controlText.style.color = '#333';
        this.controlText.innerHTML = 'Centralizar';

        this.controlUI.appendChild(this.controlText);

        this.controlUI.addEventListener('click', () => {
            map.setCenter(centerMap);
        })
    }
}

function initMap () {
    var mapOptions = {
        center: centerMap,
        zoom: 10
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    const centerControl = new CenterControl(map);
                //posição
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControl.controlDiv)
}