import React from "react";

import "../style/ModalItems.css";

class ModalItems extends React.Component {
  data = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      description:
        "Rick is a mentally-unbalanced but scientifically-gifted old",
      urlImagen: "https://rickandmortyapi.com/api/character/avatar/345.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      description:
        "Morty is a mentally-unbalanced but scientifically-gifted old",
      urlImagen: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  imageData = new Map();

  imagesSaved = new Map();

  keys = Object.keys(this.data[0]);

  omitirDatos = new Map();
  urlImagen;
  description;
  /**
   * llenamos los datos, ademas de cargar los datos en el select nuevamente,
   * esto ayudara a que el usuario pueda seleccionar otro dato
   */
  static changeInfo = () => {
    let select = document.getElementById("select_color");
    while (select.firstChild) {
      select.removeChild(select.firstChild);
    }
    this.data?.map((item) => {
      console.log(item);
      var newOption = document.createElement("option");
      newOption.value = item.id;
      newOption.setAttribute("key", item.id?.toString());
      newOption.appendChild(document.createTextNode(item.name?.toString()));
      select.appendChild(newOption);
    });
  };
  /**
   *  llena los datos del modal
   */
  fillData = () => {
    let select = document.getElementById("select_color");
    // aqui seleccionamos el item
    let item = this.data[select.selectedIndex];
    //aqui llenamos la descripcion
    let description_text = document.getElementById("description_text");
    description_text.innerHTML = item.description;
    // Aqui se cambia la imagen
    if (this.imageData.has(item.id)) {
      this.urlImagen = this.imageData.get(item.id);
      let url = URL.createObjectURL(this.imageData.get(item.id));
      document.getElementById("img_modal").src = url;
    } else {
      fetch(item.urlImagen)
        .then((res) => res.blob())
        .then((blob) => {
          let url = URL.createObjectURL(blob);
          let image = document.getElementById("img_modal");
          image.src = url;
          this.imageData.set(item.id, blob);
        })
        .catch((err) => {
          console.log(err);
          alert("Error al cargar la imagen,verifique su conexion a internet");
        });
    }
    //aqui llenamos los datos del json seleccionado
    let conteinerText = document.getElementById("item_text");
    while (conteinerText.firstChild) {
      conteinerText.removeChild(conteinerText.firstChild);
    }
    this.keys.map((e) => {
      if (!this.props.omitirDato?.has(e)) {
        var newParagraph = document.createElement("p");
        newParagraph.innerHTML = e.toString() + ": " + item[e]?.toString();
        conteinerText.appendChild(newParagraph);
      }
    });
  };

  static getImageData() {
    return this.imageData;
  }

  static setImageData(data) {
    this.imageData = data;
  }

  render() {
    return (
      <section className="Modal-conteiner" id="target">
        <div className="Body-Modal">
          <div className="Content-modal">
            <h2 className="modal-title">Title</h2>
            <div className="Detail-modal">
              <img
                id="img_modal"
                sdfho
                src={this.urlImagen}
                alt="imagenModal"
                className="Img-modal"
              />
              <div className="Detail-modal-text">
                {/* Aqui se aloja el comboBox */}
                <select
                  id="select_color"
                  className="select-color"
                  onChange={this.fillData}
                >
                  {this.data.map((item) => {
                    return (
                      <option key={item.id?.toString()}>
                        {item.name?.toString()}
                      </option>
                    );
                  })}
                </select>
                <div id="item_text" className="item-text">
                  {/* llenamos los detalles */}
                  {this.keys.map((e) => {
                    if (!this.props.omitirDato?.has(e)) {
                      return (
                        <p key={e?.toString()}>
                          {e.toString()}: {this.data[0][e]}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            <div className="Description-modal">
              <p className="Description-title">Descripcion</p>
              <p id="description_text" className="Description-text">
                {this.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ModalItems;
