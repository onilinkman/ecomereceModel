import React from "react";
import "../../style/logIn/Login.css";

const themes = {
  light: {
    background: "black",
    color: "white",
  },
};

class Login extends React.Component {
  render() {
    return (
      <div className="Login-container">
        <div className="Login-title">
          <h1>Iniciar Sesión</h1>
        </div>
        <div className="Login-content">
          <div className="Login-input">
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" id="email" />
          </div>
          <div className="Login-input">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" />
          </div>
          <div className="Login-Button">

          <button className="btn-login">Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;