import React, { useState, useRef } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Button, Space } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import DateSelector from "./DateSelector";
import { Input } from "antd";
import Events from "./Events";

import "./Overlay.css";

const Section1 = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">{props.children}</div>
      </div>
    </section>
  );
};

const Section2 = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="Section2-box">{props.children}</div>
    </section>
  );
};

const Section3 = (props) => {
  return (
    <section
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="Section3-box">{props.children}</div>
    </section>
  );
};

export function Overlay(props) {
  const scroll = useScroll();
  const [opacityFirstSection] = useState(1);
  const [opacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  const [show, setShow] = useState(false);


  const EventsRef = useRef(null);

  function goToEvents() {
    EventsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShow(!show);
  }

  return (
    <Scroll html>
      <Section1 className="dot">
        <h1 opacity={opacityFirstSection} className="dot">
          Hello World.
        </h1>
      </Section1>
      <div class="w-screen">
        <Section2 opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            What can I see in the sky tonight?
          </h1>
          <p>Enter your date and your location</p>
          <Input
            className="City-input"
            type="text"
            name="city"
            placeholder="Enter your City"
            id="user-location"
          ></Input>
          <p></p>
          <DateSelector />
          <p></p>
          <Space wrap>
            <Button type="primary" onClick={goToEvents}>
              Start Exploring {<RocketOutlined />}{" "}
            </Button>
          </Space>
        </Section2>
      </div>
        <Events ref={EventsRef} status={show} />
    </Scroll>
  );
}

export default Overlay;
