import { useReducer, useEffect } from "react";

export const ACTIONS = {
  USER_LOGIN: "USER_LOGIN",
  USER_SIGNUP: "USER_SIGNUP"
};

  const baseUrl = ENV["baseUrl"];
 const reducer = (state, action) => {
    switch (action.type) {  

        
  
  };
  
  const initialState = {};

  const [state, dispatch] = useReducer(reducer, initialState);

  
  const onSignUp = (id) => {
    fetch(`${baseUrl}/`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.USER_SIGNUP, payload: data })
      )
      .catch(err=> alert("An error Occured."  + err))
  };

    const onLogin = (id) => {
      fetch(`${baseUrl}/`)
        .then((res) => res.json())
        .then((data) => dispatch({ type: ACTIONS.USER_LOGIN, payload: data }))
        .catch((err) => alert("An error Occured." + err));
    };


  return {
    onSignUp,
    onLogin,
  };
}

