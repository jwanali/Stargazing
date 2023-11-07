import { useReducer, useEffect } from "react";
import React from "react";
import Alert from "../components/Alert"
import { Error } from "@material-ui/icons";

export const ACTIONS = {
  USER_LOGIN: "USER_LOGIN",
  USER_SIGNUP: "USER_SIGNUP",
  SAVE_EVENT: "SAVE_EVENT",
  DELETE_EVENT:"DELETE_EVENT",
  EDIT_EVENT:"UPDATE_EVENT"
};

 const reducer = (state, action) => {
  
   switch (action.type) {
    case ACTIONS.SAVE_EVENT:
      return {...state,message:action.payload,messageType:action.messageType}
    case ACTIONS.USER_SIGNUP: 
    
    return { ...state, message: action.payload, messageType: action.messageType };    
    case ACTIONS.USER_LOGIN:
      return {...state,saveduser:action.payload};
      case ACTIONS.DELETE_EVENT:
        return{...state,deleted:action.payload}
        case ACTIONS.EDIT_EVENT:
          return{...state,updated:action.payload}
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
      .catch(err=> {<Alert message={"Error OCcured, while fecting Events"} Type={"error"} />  })
      
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
         return  res.json();
        })
        .then((data) =>{
          console.log("Login object", data); 
          dispatch({ type: ACTIONS.USER_LOGIN, payload: data })})
        .catch((err) => {
          console.log("Error", err);
          <Alert
            message={"Error OCcured, while Loging in. Please use another Email and password"}
            Type={"error"}
          />;
        });
    };

     const onEdit = (data) => {
       const options = {
         method: "POST",
         mode: "cors",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
       };
      
       console.log(data);

       fetch(`http://localhost:8080/events/${data[0].id}/update`, options)
         .then((res) => {
           if (!res.ok) {
             return res.text().then((text) => {
               throw new Error(text);
             });
           }
           return res.json();
         })
         .then((data) => {
           console.log("Login object", data);
           dispatch({ type: ACTIONS.EDIT_EVENT, payload: data });
         })
         .catch((err) => {
           console.log("Error", err);          
          
         });
     };


     const onDelete = (data) => {
       const options = {
         method: "POST",
         mode: "cors",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
       };

       fetch(`http://localhost:8080/events/${data}/delete`, options)
         .then((res) => {
           if (!res.ok) {
             return res.text().then((text) => {
               throw new Error(text);
             });
           }
           return res.json();
         })
         .then((data) => {
           console.log("Login object", data);
           dispatch({ type: ACTIONS.DELETE_EVENT, payload: data });
         })
         .catch((err) => {
           console.log("Error", err);
         });
     };
const message = state.message;
const messageType = state.messageType;
const saveduser = state.saveduser;
  return {
    onSignUp,
    onLogin,
    message,
    messageType,
    onCreateEvent,
    saveduser,
    onEdit,
    onDelete,
  };

}
