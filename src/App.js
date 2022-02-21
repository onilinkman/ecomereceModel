import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/logIn/Login";
import Layout from "./components/Layout";
import Signup from "./components/signup/SignUp";
import AddItem from "./components/items/addItem";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/addItem" element={<AddItem />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
