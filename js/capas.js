var capas = { class CapasControl {
    constructor(map, capas) {
      this.map = map;
      this.capas = capas;
      this.control = L.control({ position: "bottomright" });
    }

    onAdd(map) {
      const container = L.DomUtil.create("div", "capas-control");
      this.map = map;

      // Crear botones para cada capa
      this.capas.forEach((capa, index) => {
        const input = L.DomUtil.create("input", "capa-checkbox", container);
        input.type = "checkbox";
        input.id = `capa${index}`;
        input.checked = true; // Por defecto, las capas están visibles

        const label = L.DomUtil.create("label", "capa-label", container);
        label.setAttribute("for", `capa${index}`);
        label.textContent = capa.nombre;

        // Escuchar eventos de cambio de visibilidad de la capa
        input.addEventListener("change", () => {
          capa.layer.setVisible(input.checked);
        });
      });

      return container;
    }

    addTo(map) {
      this.control.onAdd = this.onAdd.bind(this);
      this.control.addTo(map);
      return this;
    }
  }

  // Definir las capas personalizadas
  const manzanas = {
    nombre: "manzanas",
    layer: L.layerGroup(js / manzanas.js), // Agrega tu capa 1 aquí
  };

  const vias = {
    nombre: "vias",
    layer: L.layerGroup(js / vias.js), // Agrega tu capa 2 aquí
  };

  const postes = {
    nombre: "Postes",
    layer: L.layerGroup(js / postes.js), // Agrega tu capa 3 aquí
  };

  const capas = [manzanas, vias, postes];

  // Crear el control de visualización de capas
  const capasControl = new CapasControl(map, capas);
  capasControl.addTo(map);
};
