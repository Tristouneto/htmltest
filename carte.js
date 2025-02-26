var map = L.map('map').setView([50.4722667,3.5657314], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([50.4722667,3.5657314]).addTo(map);

marker.bindPopup("534 Rue Édouard Vaillant (Vieux-Condé)</b>").openPopup();