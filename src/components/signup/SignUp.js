import React from "react";

import "../../style/signup/signup.css";

class Signup extends React.Component {
  render() {
    return (
      <section className="signup-conteiner">
        <div className="signup-title">
          <h1>Registrarse</h1>
        </div>
        <div className="signup-content">
          <div className="signup-input">
            <label htmlFor="firstName">Nombres</label>
            <input type="text" id="firstName" />
          </div>
          <div className="signup-input">
            <label htmlFor="lastName">Apellidos</label>
            <input type="text" id="lastName" />
          </div>
          <div className="signup-input">
            <label htmlFor="phone">Celular de contacto:</label>
            <input type="number" id="phone" />
          </div>
          <div className="signup-input">
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" id="email" />
          </div>
          <div className="signup-input">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" />
          </div>
          <div className="signup-input">
            <label htmlFor="password_confirm">Confirmar Contraseña</label>
            <input type="password" id="password_confirm" />
          </div>
          <div className="signup-input">
            <button className="btn-confirm">Confirmar Registro</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
