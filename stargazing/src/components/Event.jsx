import React, { useState } from "react";

export default function Event(props){
    
<form
      onSubmit={(e) => {
        e.preventDefault();
        props.onCreateEvent(state);
      }}
    >
      {props.message && (
        <Alert message={props.message} messageType={props.messageType} />
      )}
      <div className="signup">
        <h1>Save Event</h1>
        <label>
         
          <input
            type="text"
            placeholder="Event"
            onChange={(e) => {
              setState({ ...state, event: e.target.value });
            }}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="text"
            placeholder="Date"
            onChange={(e) => {
              setState({ ...state, Date: e.target.value });
            }}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="Description"
            onChange={(e) => {
              setState({ ...state, Description: e.target.value });
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