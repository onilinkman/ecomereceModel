import React from "react";
import { Link } from "react-router-dom";

import "./dropdown.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };
  }

  render() {
    var elements = this.props.elements;
    var dropdown = [];

    for (let i = 0; i < elements.length; i++) {
      dropdown.push(
        <Link key={elements[i].name} to={elements[i].link}>
          {elements[i].name}
        </Link>
      );
    }

    return (
      <div className="dropdown">
        <button className="dropbtn">
          <i className="fas fa-bars">Ver Estado</i>
        </button>
        <div className="dropdown-content">{dropdown}</div>
      </div>
    );
  }
}

export default Dropdown;
