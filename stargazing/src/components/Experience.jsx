import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Earth } from "./Earth";
import { Overlay } from "./Overlay";

export function Experience() {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={2} damping={0.25}>
        <Overlay />
        <Earth />
      </ScrollControls>
    </>
  );
};
