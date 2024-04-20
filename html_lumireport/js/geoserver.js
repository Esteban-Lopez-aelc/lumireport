var puntos1 = L.tileLayer.wms(
  "http://localhost:8080/geoserver/proyecto_sig3/wms?",
  {
    layers: "proyecto_sig3:postes",
    format: "image/png",
    transparent: true,
    attribution: "Lumireport-2024",
  }
);
var manzanas1 = L.tileLayer.wms(
  "http://localhost:8080/geoserver/proyecto_sig3/wms?",
  {
    layers: "proyecto_sig3:manzanas",
    format: "image/png",
    opacity: 0.6,
    transparent: true,
    attribution: "Lumireport-2024",
  }
);
var vias1 = L.tileLayer.wms(
  "http://localhost:8080/geoserver/proyecto_sig3/wms?",
  {
    layers: "proyecto_sig3:vias",
    format: "image/png",
    opacity: 0.6,
    transparent: true,
    attribution: "Lumireport-2024",
  }
);
