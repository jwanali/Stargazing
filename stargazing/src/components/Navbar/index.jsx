import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { Header } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

//   return (
//     <Layout className="layout">
//       <Header
//         style={{
//           display: "flex",
//           alignItems: "left",
//         }}
//       >
//         {/* <div className="logo-container">
//           <img src={logo} />
//         </div> */}
//         <div>
//           <img className="logo" src={logo} />
//         </div>
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={["1"]}
//           items={new Array(4).fill(null).map((_, index) => {
//             const key = index + 1;
//             const labelListLoggedIn = ["Home", "Saved", "Profile", "Logout"];
//             const labelList = ["Home", "Saved", "Signup"];
//             //if logged in
//             //TODO:if not logged in
//             return {
//               key,
//               label: labelListLoggedIn[key - 1],
//             };
//           })}
//         />
//       </Header>
//     </Layout>
//   );
// };

export default Navbar;
