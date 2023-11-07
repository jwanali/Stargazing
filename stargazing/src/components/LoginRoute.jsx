import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";

export default function LoginRoute(props){
  return (
    <>
      <Navbar/>
      <Login {...props}/>
    </>
  );
}