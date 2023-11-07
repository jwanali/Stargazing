import React from "react";
import Navbar from "./Navbar";
import Registration from "./Registration";

export default function RegistrationRoute(props) {
  return(
    <>
    <Navbar/>
    <Registration {...props}/>
    </>
  )
}