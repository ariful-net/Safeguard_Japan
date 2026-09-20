let map;

function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    map = L.map('map').setView([34.6937, 135.5023], 12); // Default Osaka

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // Shelter Pin Example
    const shelterPin = L.marker([34.6863, 135.5200]).addTo(map);
    shelterPin.bindPopup("<b>Osaka City Emergency Shelter</b><br>Capacity: 500");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            map.setView([latitude, longitude], 13);
            L.marker([latitude, longitude]).addTo(map).bindPopup("<b>Your GPS Location</b>").openPopup();
        });
    }
}

window.addEventListener('DOMContentLoaded', initMap);