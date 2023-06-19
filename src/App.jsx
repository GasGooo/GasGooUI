import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Cursor from "./components/cursor/cursor";
import NoPage from "./components/NoPage/NoPage";
import Register from "./components/register/register";
import Checkout from "./components/checkout/checkout";
import Contact from "./components/contacts/contacts";

export default function App() {
  return (
  <div className="container">
    <Cursor />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </div>    
  );
}
