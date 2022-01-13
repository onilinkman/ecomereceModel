import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ModalItems from "./components/ModalItems";

var omitirDato = new Map();
omitirDato.set("description", "description");
omitirDato.set("urlImagen", "urlImagen");

ReactDOM.render(
  <ModalItems omitirDato={omitirDato} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
