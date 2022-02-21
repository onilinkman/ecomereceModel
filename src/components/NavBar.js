import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/DecorMueble-logos_white.png";

import "../style/NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("1.constructor");
  }

  componentDidMount() {
    console.log("3.componentDidMount");
  }

  componentDidUpdate() {
    console.log("4.componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("5.componentWillUnmount");
  }

  render() {
    console.log("2.render");
    var logo;
    if (window.location.pathname !== "/") {
      logo = (
        <Link to="/">
          <img className="img-logo" alt="logoCompany" src={Logo} />
        </Link>
      );
    }

    return (
      <div className="Bar-content">
        {logo}
        <a href="#">Catalogo</a>
        <a href="#">Muebles a tu medida!</a>
        <a href="#">Contactanos</a>
      </div>
    );
  }
}

export default NavBar;
