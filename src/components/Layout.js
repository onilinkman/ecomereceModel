import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function Layout(props) {
  const children = props.children;

  return (
    <React.Fragment>
      <div className="Home-Header">
        <Header />
        <div className="Home-NavBar">
          <NavBar />
        </div>
      </div>

      {children}
      <div className="Home-Footer">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
