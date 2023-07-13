window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pink',
            location: {
                lat: 35.160146,
                lng: 129.140792,
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
        model.setAttribute('gps-entity-place', `latitude: ${35.160146}; longitude: ${129.140792};`);
        model.setAttribute('gltf-model', './assets/pink/Pink.gltf');
        model.setAttribute('rotation', '0 5 0');
        model.setAttribute('position', '0 400 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '1.5 1.5 1.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
