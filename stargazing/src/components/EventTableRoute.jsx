import React from "react";
import Navbar from "./Navbar";
import EventTable from "./EventTable";

export default function EventTableRoute(props) {
  return(
    <>
    <Navbar/>
    <EventTable {...props}/>
    </>
  )
}
