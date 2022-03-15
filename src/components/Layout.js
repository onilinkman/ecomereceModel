import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
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
    return (
      <React.Fragment>
        <div className="Home-Header">
          <Header ref={this.refHeader} />
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
}

export default Layout;
