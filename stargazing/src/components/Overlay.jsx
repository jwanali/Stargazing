import React, { useState } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import DateSelector from "./DateSelector";
import ConfrimButton from "./ConfirmButton";

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
      <div className="w-1/2 flex items-center justify-center">
          <div className="Section2-box">
            {props.children}
          </div>
      </div>
    </section>
  );
};




export function Overlay() {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(scroll.range(2 / 3, 1 / 3));
    setOpacitySecondSection(scroll.range(0, 1 / 3));
  });

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
          <p>Enter your date location</p>
          <p className="mt-3">City:</p>
          <p className="mt-3">Date:</p>
          <DateSelector />
          <p>   </p>
          <ConfrimButton />
        </Section2>
      </div>
    </Scroll>
  );
}

export default Overlay;