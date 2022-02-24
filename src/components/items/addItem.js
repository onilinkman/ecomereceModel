import React from "react";

import FormItem from "./formItem";

import "../../style/items/addItem.css";
import TableLibrary from "../table";

class AddItem extends React.Component {
  render() {
    var data = [
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
      { id: 3, name: "item3" },
    ];
    var dataTable = [
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
      { id: 4, name: "item3" },
    ];

    var skipHeader = new Map();
    return (
      <div className="addItem-container">
        <div className="addItem-list">
          <TableLibrary
            data={dataTable}
            headerExtraAfter={[
              {
                hola: (data, index) => {
                  return <button onClick={() => alert(data.id)}>hola</button>;
                },
              },
              {
                esto: (data, index) => {
                  return <button onClick={() => alert(data.id)}>hola</button>;
                },
              },
              {
                despues: (data, index) => {
                  return <button onClick={() => alert(data.id)}>hola</button>;
                },
              },
            ]}
            headerExtraBefore={[
              {
                esto: (data, index) => {
                  return <button>{data.id}</button>;
                },
              },
              {
                se: (data, index) => {
                  return <button>{data.id}</button>;
                },
              },
              {
                mostrara: (data, index) => {
                  return <button>{data.id}</button>;
                },
              },
              {
                antes: (data, index) => {
                  return <button>{data.id}</button>;
                },
              },
            ]}
            skipHeader={skipHeader}
          />
        </div>
        <div className="addItem-form">
          <div className="addItem-container-form">
            <div className="addItem-img-det">
              <picture className="addItem-image">
                <source
                  srcSet="https://via.placeholder.com/150"
                  media="screen and (max-width: 360px)"
                />
                <img src="https://via.placeholder.com/800" alt="" />
              </picture>
              <div className="addItem-detail">
                <label htmlFor="addItem_detail_input">Descripcion:</label>
                <textarea
                  type="text"
                  placeholder="Ingrese la descripcion"
                  id="addItem_detail_input"
                  rows={5}
                />
              </div>
            </div>
            <div className="addItem-form-item">
              <h1 className="addItem-title">Datos del Producto</h1>
              <FormItem data={data} />
            </div>
          </div>
        </div>
        <div className="addItem-buttons">
          <button className="addItem-button">Guardar</button>
          <button className="addItem-button">Ver estadistica</button>
        </div>
      </div>
    );
  }
}

export default AddItem;
