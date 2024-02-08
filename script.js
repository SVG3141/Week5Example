mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZGVzczAwNCIsImEiOiJjbHNjN2hqdTQwbmYzMmxuc3ZnZXVrcnF3In0.aehvUxKNl2NfOpuQ3jNgMA'; //Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
container: 'my-map', // map container ID
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [-79, 43], // starting position [lng, lat]
zoom: 5, // starting my-maps
});

map.on('load', () => {
    //Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
    type: 'geojson',
    data: {
    //Defining Collection type
    "type": "FeatureCollection",
    "features": [
    {
    //Labeling individual Feature
    "type": "Feature",
    "properties": {
    "name": "Sidney Smith Hall"
    },
    "geometry": {
    "coordinates": [
    -79.39865237301687,
    43.662343395037766
    ],
    //Defining feature type
    "type": "Point"
    }
    }
    ]
    }
    }
    )
    })
    // Add a data source from a GeoJSON file
    map.addSource('buildings-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/SVG3141/Week5Example/main/wk5-data.geojson' // Your URL to your buildings.geojson file
    });

    map.addLayer({
    //Visual deifninton of feature on map
    'id': 'uoft-pnt',
    'type': 'circle',
    'source': 'uoft-data',
    'paint': {
    'circle-radius': 6,
    'circle-color': '#B42222'
    }
    });
