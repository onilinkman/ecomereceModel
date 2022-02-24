import React from "react";

import ComboBox from "./comboBox";

import "../../style/items/formItem.css";

class FormItem extends React.Component {
  render() {
    return (
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
            type="text"
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
          <ComboBox data={this.props.data} />
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
    );
  }
}

export default FormItem;
