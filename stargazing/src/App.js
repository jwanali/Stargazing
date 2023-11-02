import React from "react";
import "./App.css";
import Layout from "./Component/Layout";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  useApplicationData from "./hooks/useApplicationData";
import Alert from "./Component/Alert";

function App() {
  const {onSignUp, onLogin, message, messageType} = useApplicationData({},{},"","");
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Layout />}>
          {" "}
          <Route index element={"/"} />{" "}
          <Route path="login" element={<Login onLogin={onLogin} />} />{" "}
          <Route
            path="registration"
            element={<Registration onSignUp={onSignUp} message={message} messageType={messageType}/>}
          />{" "}          
          
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );

  
  
}

export default App;
