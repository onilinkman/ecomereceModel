import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/logIn/Login";
import Layout from "./components/Layout";
import Signup from "./components/signup/SignUp";
import AddItem from "./components/items/addItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refLayout = React.createRef();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout ref={this.refLayout}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/login"
              element={
                <Login
                  actionBeforeLogin={() =>
                    this.refLayout.current.actionBeforeLogin()
                  }
                />
              }
            />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/addItem" element={<AddItem />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
