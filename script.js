window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Whale',
            location: {
                lat: 35.149146,
                lng: 129.065263,
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
        model.setAttribute('gps-entity-place', `latitude: ${35.149146}; longitude: ${129.065263};`);
        model.setAttribute('gltf-model', './assets/whale/scene.glb');
        model.setAttribute('position', '0 100 0');
        model.setAttribute('rotation', '0 25 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.01 0.01 0.01');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
