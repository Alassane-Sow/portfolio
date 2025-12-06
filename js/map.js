/* Map voor Antwerpen locatie */

// pagina laden 
document.addEventListener('DOMContentLoaded', function() {
    let map = L.map('map').setView([51.2194, 4.4025], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // mijn locatie 
    let myMarker = L.marker([51.2194, 4.4025]).addTo(map);
    myMarker.bindPopup("<b>Antwerpen</b><br>Antwerpen").openPopup();
});