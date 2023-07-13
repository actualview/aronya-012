window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pink',
            location: {
                lat: 35.149119,
                lng: 129.065069,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${35.149119}; longitude: ${129.065069};`);
        model.setAttribute('gltf-model', './assets/pink/Pink.gltf');
        model.setAttribute('rotation', '0 5 0');
        model.setAttribute('position', '0 300 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '10 10 10');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
