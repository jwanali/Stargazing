import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import logo from "../assets/logo.png";
import "./Navbar.css";
import useApplicationData from "../../hook/useApplicationData";

const Navbar = () => {
  const { Header } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const {message, messageType, onSignUp, onLogin } = useApplicationData
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "left",
        }}
      >
        <div>
          <img className="logo" src={logo} />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/saved">Saved</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/logout">Logout</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/weather">Weather</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/login">Log in</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/Signup">Sign up</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Layout, Menu, theme } from "antd";
// import logo from "../assets/logo.png";
// import "./Navbar.css";

// // Create a context or use an existing context to manage user authentication status
// // For example, you can create an AuthContext
// const AuthContext = React.createContext();

// const Navbar = () => {
//   const { Header } = Layout;
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   // Use the useContext hook to access the authentication status
//   const { isLoggedIn } = useContext(AuthContext);

//   return (
//     <Layout className="layout">
//       <Header
//         style={{
//           display: "flex",
//           alignItems: "left",
//         }}
//       >
//         <div>
//           <img className="logo" src={logo} alt="Logo" />
//         </div>
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
//           <Menu.Item key="1">
//             <Link to="/">Home</Link>
//           </Menu.Item>
//           {isLoggedIn && (
//             <>
//               <Menu.Item key="2">
//                 <Link to="/saved">Saved</Link>
//               </Menu.Item>
//               <Menu.Item key="3">
//                 <Link to="/profile">Profile</Link>
//               </Menu.Item>
//               <Menu.Item key="4">
//                 <Link to="/logout">Logout</Link>
//               </Menu.Item>
//             </>
//           )}
//           {!isLoggedIn && (
//             <>
//               <Menu.Item key="6">
//                 <Link to="/login">Log in</Link>
//               </Menu.Item>
//               <Menu.Item key="7">
//                 <Link to="/signup">Sign up</Link>
//               </Menu.Item>
//             </>
//           )}
//           <Menu.Item key="5">
//             <Link to="/weather">Weather</Link>
//           </Menu.Item>
//         </Menu>
//       </Header>
//     </Layout>
//   );
// };

// export default Navbar;
