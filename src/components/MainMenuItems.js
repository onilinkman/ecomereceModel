import React from "react";
import "../style/MainMenuItems.css";

class MainMenuItems extends React.Component {
  render() {
    return (
      <div className="Menu-body">
        <h2>Muebles para:</h2>
        <div className="Menu-content">
          <input type="checkbox" id="inOficina" />
          <label htmlFor="inOficina">Oficina</label>
        </div>
        <div className="Menu-content">
          <input type="checkbox" id="inDormitorio" />
          <label htmlFor="inDormitorio">Dormitorio</label>
        </div>
        <div className="Menu-content">
          <input type="checkbox" id="inCocina" />
          <label htmlFor="inCocina">Cocina</label>
        </div>
        <div className="Menu-content">
          <input type="checkbox" id="inBa" />
          <label htmlFor="inBa">Baño</label>
        </div>
      </div>
    );
  }
}

export default MainMenuItems;
