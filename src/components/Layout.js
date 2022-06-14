import React from "react";

import Header from "../components/Header";
//import NavBar from "../components/NavBar";
import NavBar from "./navbar/navbar";
import Footer from "../components/footer";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.refHeader = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("update layout");
  }

  actionBeforeLogin() {
    this.refHeader.current.checkLogin();
  }

  render() {
    const children = this.props.children;
    var listUl = [
      {
        name: "Home",
        link: "/",
        content: [],
      },
      {
        name: "Iniciar Sesión",
        link: "/login",
        content: [],
      },
      {
        name: "Roles",
        link: "",
        content: [
          {
            name: "Administrador",
            link: "/addItem",
          },
        ],
      },
      {
        name: "Cerrar Session",
        link: "/login",
        content: [],
      },
      {
        name: "lo que sea",
        link: "/sadf",
        content: [],
      },
    ];
    return (
      <React.Fragment>
        <NavBar listUl={listUl} />

        {children}
        <div className="Home-Footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
