import React, { useState } from "react";
import { Card } from "antd";
import { HeartFilled } from "@ant-design/icons";
import "./Events.css";

export default function Events(props) {
  const contentList = {
    Moon: (
      <div className="moon" label="moon">
        <h2>Moon Phase: Waning Cresent</h2>
        <h2>
          Next Phase: Nov 13, 2023 - New Moon{" "}
          <HeartFilled onClick={props.onConfirm} className="heartIcon" />
        </h2>
        <h2>Moonrise Today: 8:43pm</h2>
        <h2>Moonset Today: 12:27pm</h2>
      </div>
    ),
    Sun: (
      <div className="sun" label="Sun">
        <h2>Daylight Hours: 10 hours, 16 minutes</h2>
        <h2>Sunrise Today: 7:57am</h2>
        <h2>Sunset Today: 6:13pm</h2>
        <h2>
          Next Solstice: Dec 21, 2023 10:27pm{" "}
          <HeartFilled className="heartIcon" onClick={props.onConfirm} />
        </h2>
      </div>
    ),
    Planets: (
      <div className="planets" label="Planets">
        <h2>
          Mercury: Until Wed 6:29 pm{" "}
          <HeartFilled className="heartIcon" onClick={props.onConfirm} />{" "}
        </h2>
        <h2>
          Venus: From Thu 3:58 am{" "}
          <HeartFilled className="heartIcon" onClick={props.onConfirm} />{" "}
        </h2>
        <h2>
          Mars: Until Wed 6:25 pm{" "}
          <HeartFilled className="heartIcon" onClick={props.onConfirm} />{" "}
        </h2>
        <h2>
          Jupiter: From Wed 6:16 pm{" "}
          <HeartFilled className="heartIcon" onClick={props.onConfirm} />{" "}
        </h2>
        <h2>
          Saturn: Until Thu 2:02 am{" "}
          <HeartFilled className="heartIcon" onClick={props.onConfirm} />{" "}
        </h2>
        <h2>
          Uranus: From Wed 6:40 pm{" "}
          <HeartFilled className="heartIcon" onClick={props.onConfirm} />{" "}
        </h2>
        <h2>
          Neptune: Until Thu 4:12 am{" "}
          <HeartFilled className="heartIcon" onClick={props.onConfirm} />{" "}
        </h2>
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

  const [activeTabKey1, setActiveTabKey1] = useState("Moon");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <div
      className="events-card"
      style={{ visibility: props.status ? "visible" : "hidden" }}
    >
      <Card
        style={{
          width: "100%",
          color: "#91caff",
          backgroundColor: "#001529"
        }}
        className="box"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
    </div>
  );
}
