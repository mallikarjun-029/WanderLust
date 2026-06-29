const lon = mapData.coordinates[0];
const lat = mapData.coordinates[1];

const map = L.map("map").setView([lat, lon], 2);

L.maplibreGL({
    style: "https://tiles.openfreemap.org/styles/liberty"
}).addTo(map);

L.marker([lat, lon])
    .addTo(map)
    .bindPopup(mapData.title)
    .openPopup();

map.flyTo([ lat, lon ], 14);

setTimeout(() => {
    map.flyTo([lat, lon], 14);
}, 500);