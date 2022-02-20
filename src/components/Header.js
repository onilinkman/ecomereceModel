import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/DecorMueble-logos_white.png";
import "../style/Header.css";
import WhatsappLogo from "../images/WhatsApp-Logotipo.png";
import FacebookLogo from "../images/facebook_icon.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header-content">
        <img alt="logoCompany" src={Logo} />
        <div className="Header-Links">
          <div className="Header-actions">
            <a href="#">Carrito</a>
            <Link to="/login">Iniciar Sesion</Link>
          </div>
          <div className="Links-Content">
            <a href="#">
              <img src={WhatsappLogo} alt="whatsappIcon" />
            </a>
            <a href="#">
              <img src={FacebookLogo} alt="facebookIcon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
