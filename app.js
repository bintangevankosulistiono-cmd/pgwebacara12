const map = L.map("map");

const openStreetMap = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const geoserverWms = "http://localhost:8080/geoserver/wms";

const fasilitasKesehatan = L.Geoserver.wms(
  geoserverWms,
  {
    layers: "pgweb:fasilitas_kesehatan_geo",
    transparent: true,
  },
).addTo(map);

L.control.layers(
  {
    OpenStreetMap: openStreetMap,
  },
  {
    "Fasilitas Kesehatan": fasilitasKesehatan,
  },
  { collapsed: false },
).addTo(map);

L.Geoserver.legend("http://localhost:8080/geoserver", {
  layers: "pgweb:fasilitas_kesehatan_geo",
}).addTo(map);

map.fitBounds([
  [-7.9532752754, 112.5835261522],
  [-7.9450553496, 112.6037048934],
]);
