import React from "react";
import "./App.css";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  useApplicationData from "./hooks/useApplicationData";

function App() {
  const {onSignUp, onLogin} = useApplicationData({},{});
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Layout />}>
          {" "}
          {/* <Route index element={<Home />} />{" "} */}
          <Route path="login" element={<Login onLogin={onLogin} />} />{" "}
          <Route path="registration" element={<Registration onSignUp={onSignUp} />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
