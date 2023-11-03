import React, { useState } from "react";
import { Select, Space, Layout, Menu, Card } from "antd";
import "./Events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Weather_api from "../../hook/weather_api";
import Weather from "../Weather";
import Eclipse from "./eclipses";
import Planets from "./planets";
import Moon from "./moon";
import Sun from "./sun";

export default function Events(props) {
  const { Content, Sider } = Layout;
  const [show, setShow] = useState(false);


  const contentList = {
    tab1: <p>Content 1 </p>,
  };

  const tabList = [
    {
      key: 1,
      tab: 1,
      label: "Moon",
    },
    {
      key: 2,
      tab: 2,
      label: "Sun",
    },
    {
      key: 3,
      tab: 3,
      label: "Eclipse",
    },
    {
      key: 4,
      tab: 4,
      label: "Planets",
    },
  ];

  const [activeTabKey1, setActiveTabKey1] = useState(1);
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (

    <div style={{visibility: props.status ? "visible" : "hidden"
        }}>
    <h1 className="event-header" >Here is what you can see on date in city</h1>
    <Card
        style={{
          width: "100%",
        }}
        className="box"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
    </div>
  );
}

//   return (
//     <div
//       style={{ visibility: props.status ? "visible" : "hidden" }}
//       className="box"
//     >
//       <h1 className="event-header">Here is what you can see on date in city</h1>
//       <div className="events-menu">
//         <Layout style={{ height: "400px", margin: "40px" }}>
//           <Sider width={200}>
//             <Menu
//               mode="inline"
//               theme="dark"
//               defaultSelectedKeys={["1"]}
//               style={{
//                 height: "100%",
//               }}
//               items={[
//                 {
//                   key: 1,
//                   tab: 1,
//                   icon: (
//                     <FontAwesomeIcon
//                       icon={icon({ name: "moon", style: "solid" })}
//                     />
//                   ),
//                   label: "Moon",

//                 },
//                 {
//                   key: 2,
//                   tab: 2,
//                   icon: (
//                     <FontAwesomeIcon
//                       icon={icon({ name: "sun", style: "solid" })}
//                     />
//                   ),
//                   label: "Sun",
//                 },
//                 {
//                   key: 3,
//                   tab: 3,
//                   icon: (
//                     <FontAwesomeIcon
//                       icon={icon({
//                         name: "circle-half-stroke",
//                         style: "solid",
//                       })}
//                     />
//                   ),
//                   label: "Eclipse",
//                 },
//                 {
//                   key: 4,
//                   tab: 4,
//                   icon: (
//                     <FontAwesomeIcon
//                       icon={icon({ name: "earth-europe", style: "solid" })}
//                     />
//                   ),
//                   label: "Planets",
//                 },
//                 {
//                   key: 5,
//                   icon: (
//                     <FontAwesomeIcon
//                       icon={icon({ name: "satellite", style: "solid" })}
//                     />
//                   ),
//                   label: "Satellites",
//                 },
//               ]}
//             />
//           </Sider>
//           <Content
//             style={{
//               padding: "0 24px",
//               minHeight: 280,
//             }}
//           >
//             <Eclipse status={show}/>
//           </Content>
//         </Layout>
//       </div>
//       <div className="weather-container">

//       </div>
//     </div>
//   );
// }
