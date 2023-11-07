import React, { useRef, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "./assets/8k_earth_daymap.jpg";
import EarthCloudMap from "./assets/8k_earth_clouds.jpg";
import EarthNormMap from "./assets/8k_earth_normal_map.jpg";
import EarthSpecMap from "./assets/8k_earth_specular_map.jpg";
import { TextureLoader } from "three";

export function Earth({ scroll, ...props }) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormMap, EarthSpecMap, EarthCloudMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {<ambientLight intensity={2.2} />}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />

      <mesh ref={cloudsRef} position={[0, 0.05, 3.225]}>
        <sphereGeometry args={[1.005, 33, 33]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={earthRef} position={[0, 0.05, 3.225]}>
        <sphereGeometry args={[1, 33, 33]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
