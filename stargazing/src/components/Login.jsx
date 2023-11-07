// import React, { useState } from "react";
// import useApplicationData from "../hook/useApplicationData";
// import Alert from "./Alert";
// import "../styles/Login.css";
// export default function Login() {
//   const { login, isAuthenticated, error } = useApplicationData();
//   const [state, setState] = useState({
//     email: "",
//     password: "",
//   });
//   // const history = useHistory();

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     const loginResult = await onLogin(state);
//     props.onLogin(state);
//     if(loginResult.success) {
//       history.push("/home");
//     } else {
//       history.push("/signup");
//     }
      
//   }

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         props.onLogin(state);
//       }}
//     >
//       {props.message && (
//         <Alert message={props.message} messageType={props.messageType} />
//       )}
//       <div className="login">
//         <h1>Login</h1>
//         <label>
//           <input
//             type="text"
//             placeholder="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           <input
//             type="password"
//             placeholder="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </label>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </div>
//     </form>
//   );
// }
import React, { useState } from "react";
import useApplicationData from "../hook/useApplicationData";
import Alert from "./Alert";
import { Navigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const { onLogin, message, messageType } = useApplicationData();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginResult = await onLogin(formData);
    if (loginResult.success) {
      return <Navigate to="/" />
    } else {
       return <Navigate to="/Signup" />
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {message && (
          <Alert message={message} messageType={messageType} />
        )}
        <div className="login">
          <h1>Login</h1>
          <label>
            <input
              type="text"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
