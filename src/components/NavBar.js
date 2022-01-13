import React from "react";

import "../style/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Bar-content">
        <a href="#">Catalogo</a>
        <a href="#">Muebles a tu medida!</a>
        <a href="#">Contactanos</a>
      </div>
    );
  }
}

export default NavBar;
