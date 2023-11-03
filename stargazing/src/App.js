import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  useApplicationData from "./hook/useApplicationData";
import Alert from "./components/Alert";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import StarsBackground from "./components/StarsBackground";
import Navbar from "./components/Navbar";

// function App() {
//   const {onSignUp, onLogin, message, messageType} = useApplicationData({},{},"","");
//   return (
//     <BrowserRouter>
//       {" "}
//       <Routes>
//         {" "}
//         <Route path="/" element={<Layout />}>
//           {" "}
//           <Route index element={"/"} />{" "}
//           <Route path="login" element={<Login onLogin={onLogin} />} />{" "}
//           <Route
//             path="registration"
//             element={<Registration onSignUp={onSignUp} message={message} messageType={messageType}/>}
//           />{" "}          
          
//         </Route>{" "}
//       </Routes>{" "}
//     </BrowserRouter>
//   );
//   }

function App() {
  return (
    <>
      <Navbar />
      <Canvas>
      <StarsBackground />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;

  

