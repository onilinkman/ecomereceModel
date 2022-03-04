import React from "react";
import { Link } from "react-router-dom";
import "../../style/logIn/Login.css";

const themes = {
  light: {
    background: "black",
    color: "white",
  },
};

class Login extends React.Component {
  state = {
    loading: false,
    error: null,
    data: null,
  };

  componentDidMount() {}

  fetchData = () => {
    console.log("hola");
    this.setState({ loading: true, error: null });
    var body = JSON.stringify(this.getFormLogin());
    console.log(body);
    fetch("http://192.168.0.123:8000/api/v1/users", {
      method: "POST",

      body: body,
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ loading: false, data });
        console.log(data);
      })
      .catch((error) => {
        this.setState({ loading: false, data: error });
        console.log(error);
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

    if (this.state.loading) {
      viewLoading = <div className="loading">Loading...</div>;
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
