import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import StarsBackground from "./StarsBackground";
import Navbar from "./Navbar";
import styled from "styled-components";
export default function Home(){
  return (
    <>
      <Navbar/>
      <Canvas>
        <StarsBackground />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
