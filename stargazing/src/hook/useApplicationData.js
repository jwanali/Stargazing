import { useReducer } from "react";
// import React from "react";

export const ACTIONS = {
  USER_LOGIN: "USER_LOGIN",
  USER_SIGNUP: "USER_SIGNUP",
  SAVE_EVENT: "SAVE_EVENT"
};

 const reducer = (state, action) => {
  
   switch (action.type) {
    case ACTIONS.SAVE_EVENT:
      return {...state,message:action.payload,messageType:action.messageType}
    case ACTIONS.USER_SIGNUP: 
    
    return { ...state, message: action.payload, messageType: action.messageType };    
    case ACTIONS.USER_LOGIN:
      return {...state,photoData: action.payload}
   }
 };
 const initialState = {

 };

export default function useApplicationData() {
 
 
 const [state, dispatch] = useReducer(reducer, initialState);

 const onCreateEvent = (data) => {
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
     body: JSON.stringify(data),
  };

  fetch(`http://localhost:8080/add_event`,options)
      .then((res) => {
               
        return  res.json();
      })
      .then((result) => {
        
        dispatch({
          type: ACTIONS.SAVE_EVENT,
          payload: result.message || result.error,
          messageType: result.message ? "success":"error", 
        });}
        
      )
      .catch(err=> alert("An error Occured."  + err))
  };

 
 const onSignUp = (data) => {
 
 
 const options = {
   method: "POST",
   mode: "cors",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(data),
 };

  fetch(`http://localhost:8080/sign_up`,options)
      .then((res) => {
               
        return  res.json();
      })
      .then((data) => {
        
        dispatch({ type: ACTIONS.USER_SIGNUP, payload: data.message , messageType:"success"})}
        
      )
      .catch(err=> alert("An error Occured."  + err))
  };

    const onLogin = (userdata) => {
       const options = {
         method: "POST",
         mode: "cors",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(userdata),
       };

      fetch(`http://localhost:8080/login`, options)
        .then((res) => {
           if (!res.ok) {
             return res.text().then((text) => {
               throw new Error(text);
             });
           }
          res.json();
        })
        .then((data) => dispatch({ type: ACTIONS.USER_LOGIN, payload: data }))
        .catch((err) => alert("An error Occured." + err));
    };
const message = state.message;
const messageType = state.messageType;

  return {
    onSignUp,
    onLogin,
    message,
    messageType,
    onCreateEvent
  };

}
