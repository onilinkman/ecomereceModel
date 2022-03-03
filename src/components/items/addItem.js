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
      { id: 3, name: "itemasdfasdfsadgsadfgdsfadsfcxvsdf3" },
      { id: 4, name: "item4" },
      { id: 5, name: "item5" },
      { id: 6, name: "item6" },
      { id: 7, name: "item7" },
      { id: 8, name: "item8" },
      { id: 9, name: "item9" },
      { id: 11, name: "item1" },
      { id: 12, name: "item12" },
      { id: 13, name: "item13" },
      { id: 14, name: "item4" },
      { id: 15, name: "item5" },
      { id: 16, name: "item6" },
      { id: 17, name: "item7" },
      { id: 18, name: "item8" },
      { id: 19, name: "item9" },
      { id: 20, name: "item20" },
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
            className="addItem-table"
            idName="addItem-table"
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
                <img
                  src="https://via.placeholder.com/800"
                  alt=""
                  onClick={() => {
                    document.getElementById("addItem_imagenAdd").click();
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                  id="addItem_image"
                />
                <input
                  accept="image/*"
                  type="file"
                  id="addItem_imagenAdd"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    let file = e.target.files[0];
                    if (file) {
                      let reader = new FileReader();
                      reader.onload = () => {
                        document.getElementById("addItem_image").src =
                          reader.result;
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
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
