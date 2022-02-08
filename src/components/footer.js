import React from "react";

import "../style/footer.css";

class footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="colum-1">
          <h3>Ubicacion</h3>
          <li>Nataniel Aguirre Nº924</li>
          <li>marbanchristian@gmail.com</li>
          <li>79161442</li>
        </div>
        <div className="colum-2">
          <h3>Redes Sociales</h3>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Whatsapp</li>
        </div>
        <div className="colum-3">
          <h3>Horario</h3>
          <li>Lunes a Viernes</li>
          <li>8:00 a 20:00</li>
        </div>
      </div>
    );
  }
}

export default footer;
