let myMap = L.map('mapid');
myMap.setView([39.952583, -75.165222], 12);

let tiles = L.tileLayer(  "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg" // stamen toner tiles
);



tiles.addTo(myMap);

$.getJSON("https://cdn.glitch.com/a3090a9a-9641-4087-9cda-f2c18069349c%2FRainCheck_Installed.geojson?v=1626204528874", function(data){
  
// let legend = L.control({position: 'bottomright'});
  
// legend.addTo(myMap);
  
  let rainCheckSites = L.geoJson(data, {
    
    pointToLayer: function(feature, latlng) {
      return new L.CircleMarker(latlng, {
        radius:1,
        color: getColor(feature)
      });
    },
    onEachFeature: addPopUp
    
  });
  
  
  
  rainCheckSites.addTo(myMap);
  
})




function addPopUp(feature,layer){
  layer.bindPopup(feature.properties.PWD_FISCAL_YEAR)
  
}

function getColor(feature){
  switch (feature.properties.TOOLS_INSTALLED) {
            case 'depaving':
              return  'orange';
            case 'downspout planter':
              return 'green';
            case 'Downspout planter':
              return 'green';
            case 'rain garden':
              return 'blue';
            case 'rain barrel':
              return 'purple';
            case 'Rain Barrel':
              return 'purple;'
            case 'permeable pavers':
              return 'pink';
            case 'Permeable pavers':
              return 'pink';
            default:
              return 'black';
          }
        }

