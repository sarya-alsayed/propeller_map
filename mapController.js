function initMap(){
    let map = L.map('map').setView([10.505, -0.09], 1);

    //create map from local jpeg tiles
   let tileLayer = L.tileLayer.colorFilter('tiled/{z}/{x}/{y}.jpg', { maxZoom: 3, filter: []}).addTo(map);
   return [map, tileLayer]
}

function zoomInOnPoint(map){
    $('.point').on('click', function(){
    
        // parse lat and lng from the divs data attribute
        var latlng = $(this).data().point.split(',');
        var lat = latlng[0];
        var lng = latlng[1];
        var zoom = 10;

        // add a marker
        var marker = L.marker([lat, lng],{}).addTo(map);
        
        // set the view
        map.setView([lat, lng], zoom);

        //add popup
        marker.bindPopup("sarya@propelleraero.com").openPopup();
    })
}

function addFilters(map, tileLayer){
    let defaultToDarkFilter = [
        'grayscale:100%',
        'invert:100%',
    ]

    let colorFilter = [
        'blur:0px',
        'brightness:95%',
        'contrast:130%',
        'grayscale:20%',
        'hue:290deg',
        'opacity:100%',
        'invert:100%',
        'saturate:300%',
        'sepia:10%',
    ];

    let brightFilter = [
        'brightness:110%',
        'hue:90deg',
        'saturate:120%',
    ];

    $('#dark').on('click', function(){
        tileLayer.updateFilter(defaultToDarkFilter);
    })
    $('#color').on('click', function(){
        tileLayer.updateFilter(colorFilter);
    })
    $('#bright').on('click', function(){
        tileLayer.updateFilter(brightFilter);
    })
    $('#reset').on('click', function(){
        tileLayer.updateFilter([]);
    })

}

var propellerMap = initMap();
let map = propellerMap[0];
let tileLayer = propellerMap[1];
zoomInOnPoint(map);
addFilters(map,tileLayer);