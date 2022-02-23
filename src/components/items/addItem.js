import React from "react";
import ComboBox from "./comboBox";

import "../../style/items/addItem.css";

class AddItem extends React.Component {
  render() {
    var data = [
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
      { id: 3, name: "item3" },
    ];
    return (
      <div className="addItem-container">
        <div className="addItem-list">sd</div>
        <div className="addItem-form">
          <div className="addItem-container-form">
            <div className="addItem-details"></div>
            <div className="addItem-form">
              <h1>Datos del Producto</h1>
              <div className="addItem-data">
                <div className="addItem-input-container">
                  <label htmlFor="addItem_Name">Nombre:</label>
                  <input
                    type="text"
                    placeholder="Nombre del Producto"
                    id="addItem_Name"
                  />
                </div>
                <div className="addItem-input-container">
                  <label htmlFor="addItem_codigo">Codigo:</label>
                  <input
                    type="text "
                    placeholder="Codigo del Producto"
                    id="addItem_codigo"
                  />
                </div>
                <div className="addItem-input-container">
                  <label htmlFor="addItem_marca">Marca:</label>
                  <input
                    type="text"
                    placeholder="Marca del Producto"
                    id="addItem_marca"
                  />
                </div>
                <div className="addItem-input-container">
                  <label htmlFor="addItem_proveedor">Proveedor:</label>
                  <input
                    type="text"
                    placeholder="Proveedor del Producto"
                    id="addItem_proveedor"
                  />
                </div>
                <div className="addItem-input-container">
                  <label>Categoria:</label>
                  {/* hacer que haga una peticion al server para obtener data */}
                  <ComboBox data={data} />
                </div>
                <div className="addItem-input-container">
                  <label htmlFor="addItem_precio">Precio:</label>
                  <input
                    type="text"
                    placeholder="Precio del Producto"
                    id="addItem_precio"
                  />
                </div>
                <div className="addItem-input-container">
                  <label htmlFor="addItem_precio_venta">Precio venta</label>
                  <input
                    type="text"
                    placeholder="Precio de venta"
                    id="addItem_precio_venta"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addItem-buttons">fd</div>
      </div>
    );
  }
}

export default AddItem;
