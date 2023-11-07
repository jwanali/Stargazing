import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import StarsBackground from "./StarsBackground";
import "./Home.css";
export default function Home(){
  return (
    <>
      
      <Canvas>
        <StarsBackground />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
