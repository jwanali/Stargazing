import React from "react";
import "./App.css";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Layout />}>
          {" "}
          {/* <Route index element={<Home />} />{" "} */}
          <Route path="login" element={<Login />} />{" "}
          <Route path="registration" element={<Registration />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
