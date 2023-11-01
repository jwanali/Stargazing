import { useReducer } from "react";

export const ACTIONS = {
  USER_LOGIN: "USER_LOGIN",
  USER_SIGNUP: "USER_SIGNUP"
};

 const reducer = (state, action) => {
   switch (action.type) {
    case ACTIONS.USER_SIGNUP: 
    return { ...state, photoData: action.payload };
    case ACTIONS.USER_LOGIN:
      return {...state,photoData: action.payload}
   }
 };
 const initialState = {

 };

export default function useApplicationData(initial) {
 
 
 const [state, dispatch] = useReducer(reducer, initial);
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
        
        if (!res.ok){
          return res.text().then((text)=>{
              throw new Error(text);
          })        
        }
        return  res.json()
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: ACTIONS.USER_SIGNUP, payload: data })}
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


  return {
    onSignUp,
    onLogin,
  };

}
