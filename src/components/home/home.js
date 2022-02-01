import React, { Suspense } from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import MainMenuItems from "../MainMenuItems";
import Cart from "../cart";
import dataTest from "../../models_json/muebles.json";

import "../../style/home/home.css";
import "../../style/material.css";

import LogoCarrito from "../../images/buying-enable-48.png";
import LogoLike from "../../images/icons8-favorite-80.png";

/**
 * @description Componente que se encarga de mostrar la pagina principan
 */
class Home extends React.Component {
  data = dataTest.data;

  mostrarModal = () => {
    console.log("mostrar modal");
  };

  render() {
    return (
      <div className="Home-body">
        <div className="Home-Header">
          <Header />
        </div>
        <div className="Home-NavBar">
          <NavBar />
        </div>
        <div className="Home-Content">
          <MainMenuItems />
          <div className="Cart-container">
            {this.data.map((item) => {
              console.log(item.id_object);
              return (
                <Cart
                  key={item.id_object.toString()}
                  ids={item.id_object}
                  liked={item.liked}
                  buyed={item.buyed}
                  name={item.name}
                  description={item.description}
                  url={item.colors[0].url}
                  ejecutarAccion={this.mostrarModal}
                />
              );
            })}
          </div>
          <div className="Action-container">
            <input className="search-input" type="text" placeholder="Buscar" />
            <button className="btn-option">
              Ver Carrito de Compra
              <img src={LogoCarrito} alt="button-buy" />{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
