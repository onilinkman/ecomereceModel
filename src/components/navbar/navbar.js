import React from "react";

import "./navbar.css";
import Dropdown from "./dropdown/dropdown";
import { Link } from "react-router-dom";

import Logo from "../../images/DecorMueble-logos_white.png";

class Navbar extends React.Component {
  styleNavbar = {
    display: "flex",
    justifyContent: "space-between",
  };

  styleNavbarContainer = {
    background: "#1373bf",
  };

  styleUl = {
    display: "flex",
    listStyle: "none",
    paddingLeft: "0",
    height: "100%",
    margin: "0",
  };

  styleA = {
    color: "white",
    textDecoration: "none",
    paddingLeft: "15px",
    paddingRight: "15px",
    fontSize: "1.3em",
    height: "100%",
    width: "100%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  };

  render() {
    let listUl = this.props.listUl;

    let createList = (
      <ul className="navbar-nav" style={this.styleUl}>
        {listUl.map((item) => {
          let content;
          if (item?.content?.length > 0) {
            content = <Dropdown key={item.name} elements={item.content} />;
          } else {
            content = (
              <li style={this.styleUl} key={item.name}>
                <Link to={item.link} style={this.styleA}>
                  {item.name}
                </Link>
              </li>
            );
          }

          return content;
        })}
      </ul>
    );

    return (
      <div className="navbar-container" style={this.styleNavbarContainer}>
        <div className="navbar" style={this.styleNavbar}>
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-body">
            <label
              htmlFor="navbar_box"
              className="box-shadow-menu"
              onClick={() => {
                var navbar = document.getElementById("navbar_box").checked;
                if (!navbar) {
                  document.getElementById("navbar_collapse").style.display =
                    "block";
                } else {
                  document.getElementById("navbar_collapse").style.display =
                    "none";
                }
              }}
            ></label>
            <input
              type="checkbox"
              id="navbar_box"
              className="check_navbar_box"
            ></input>
            <div className="navbar-selection">{createList}</div>
          </div>
        </div>
        <div className="navbar-collapse" id="navbar_collapse">
          {createList}
        </div>
      </div>
    );
  }
}

export default Navbar;
