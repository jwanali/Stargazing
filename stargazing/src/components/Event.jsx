import React, { useState } from "react";
import Alert from "./Alert";


export default function Event(props){
    const [state, setState] = useState({
      event_name: "",
      date: "1900-01-01",
      description: "",
      user_id: props.saveduser[0].id,
    });  
  return (
<form
      onSubmit={(e) => {
        e.preventDefault();
        props.onCreateEvent(state);
      }}
    >
      {props.message && (
        <Alert message={props.message} type={props.messageType} />
      )}
      <div className="signup">
        <h1>Save Event</h1>
        <label>
          <input
            type="text"
            placeholder="Event"
            onChange={(e) => {
              setState({ ...state, event_name: e.target.value });
            }}
          />
        </label>
        <label>
          <p></p>
          <input
            type="text"
            placeholder="Date"
            onChange={(e) => {
              setState({ ...state, date: e.target.value });
            }}
          />
        </label>
        <label>
          <p></p>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setState({ ...state, description: e.target.value });
            }}
          />
        </label>
       
        <div>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
  
}