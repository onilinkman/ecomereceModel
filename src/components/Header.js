import React from "react";
import { Link, Navigate } from "react-router-dom";

import Logo from "../images/DecorMueble-logos_white.png";
import Dropdown from "./toolsComponents/dropdown";

import "../style/Header.css";
import WhatsappLogo from "../images/WhatsApp-Logotipo.png";
import FacebookLogo from "../images/facebook_icon.png";
import Param from "../parameters.json";

class Header extends React.Component {
  state = {
    isLogin: false,
    redirect: false,
  };

  componentDidMount() {
    this.checkLogin();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("header", "update");
  }

  checkLogin = () => {
    fetch(Param.url + "/api/v1/users/session", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.status === 200) {
          this.loginAction();
        }
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  logoutFetch = () => {
    fetch(Param.url + "/api/v1/users/logout", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.logoutAction();
        this.setState({ redirect: true });
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  logoutAction = (data) => {
    this.setState({ isLogin: false });
  };

  loginAction = () => {
    this.setState({ isLogin: true });
  };

  render() {
    let rendLogin;
    if (this.state.isLogin) {
      //rendLogin = <button onClick={this.logoutFetch}>Salir</button>;
      rendLogin = (
        <Dropdown
          elements={[
            { name: "Agregar Item", url: "/addItem" },
            { name: "Salir", url: "/logout" },
          ]}
        />
      );
    } else {
      rendLogin = <Link to="/login">Iniciar Sesion</Link>;
    }
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Navigate to="/" />;
    }

    return (
      <div className="Header-content">
        <img alt="logoCompany" src={Logo} />
        <div className="Header-Links">
          <div className="Header-actions">
            <a href="#">Carrito</a>
            {rendLogin}
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
