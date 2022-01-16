import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import MainMenuItems from "../MainMenuItems";
import Cart from "../cart";

import dataTest from "../../models_json/muebles.json";

import "../../style/home/home.css";

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
              return (
                <Cart
                  key={item.id_object}
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
        </div>
      </div>
    );
  }
}
export default Home;
