import React, { useState } from "react";
import { Select, Space, Layout, Menu, Card } from "antd";
import "./Events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Weather_api from "../../hook/weather_api";
import Weather from "../Weather";


export default function Events(props) {
  
const contentList = {
    Moon: (
      <div className="moon">
        <h2>Moon Phase: Waning Gibbous</h2>
        <h2>Next Phase: Nov 5, 2023 - Third Quarter</h2>
        <h2>Moonrise Today: 8:43pm</h2>
        <h2>Moonset Today: 12:27pm</h2>
      </div>

    ),
    Sun: (
      <div label="Sun">
        <h2>Daylight Hours: 10 hours, 16 minutes</h2>
        <h2>Sunrise Today: 7:57am</h2>
        <h2>Sunset Today: 6:13pm</h2>
        <h2>Next Solstice: Dec 21, 2023 10:27pm</h2>
      </div>
    ),
    Planets: (
      <div label="Planets">
        <h1> Visible tonight </h1>
        <h2>Mercury: Until Wed 6:29 pm</h2>
        <h2>Venus: From Thu 3:58 am</h2>
        <h2>Mars: Until Wed 6:25 pm</h2>
        <h2>Jupiter: From Wed 6:16 pm</h2>
        <h2>Saturn: Until Thu 2:02 am</h2>
        <h2>Uranus: From Wed 6:40 pm</h2>
        <h2>Neptune: Until Thu 4:12 am</h2>
      </div>
    ),
  };

  const tabList = [
    {
      key: "Moon",
      tab: "Moon",
      label: "Moon",
    },
    {
      key: "Sun",
      tab: "Sun",
      label: "Sun",
    },
    {
      key: "Planets",
      tab: "Planets",
      label: "Planets",
    },
  ];

  const [activeTabKey1, setActiveTabKey1] = useState('Moon');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <div className="events-card" style={{ visibility: props.status ? "visible" : "hidden" }}>
      <h1 className="event-header">Here is what you can see on date in city</h1>
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
