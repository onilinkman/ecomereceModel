import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../../style/logIn/Login.css";
import Params from "../../parameters.json";

const themes = {
  light: {
    background: "black",
    color: "white",
  },
};

class Login extends React.Component {
  state = {
    loading: false,
    redirect: false,
    loginFailed: false,
    messageResponse: null,
    error: null,
    data: null,
  };

  componentDidMount() {}

  fetchData = () => {
    this.setState({ loading: true, error: null });
    var body = JSON.stringify(this.getFormLogin());
    fetch(Params.url + "/api/v1/users", {
      method: "POST",
      credentials: "include",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: body,
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ loading: false });
        if (data.status === 200) {
          this.setState({ redirect: true });
          this.props.actionBeforeLogin();
        } else {
          this.setState({ loginFailed: true, messageResponse: data.message });
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log("error:", error);
      });
  };

  getFormLogin = () => {
    return {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
  };

  render() {
    var viewLoading;

    var logFail;

    if (this.state.redirect) {
      return <Navigate to="/" />;
    }
    if (this.state.loading) {
      viewLoading = <div className="loading">Loading...</div>;
    }
    if (this.state.loginFailed) {
      logFail = (
        <div className="Login-error">
          <p className="Login-msj-error">{this.state.messageResponse}</p>
        </div>
      );
    }

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
            <button className="btn-login" onClick={this.fetchData}>
              Iniciar Sesión
            </button>
          </div>
          {logFail}
          <div className="Login_Options">
            <p>
              No tiene cuenta? creala <Link to="/signup">AQUI!!!</Link>.
            </p>
            <p>
              <Link to="/">RECUPERAR</Link> cuenta de usuario
            </p>
          </div>
        </div>
        {viewLoading}
      </div>
    );
  }
}

export default Login;
