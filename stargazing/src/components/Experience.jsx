import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Earth } from "./Earth";
import { Overlay } from "./Overlay";
import Events from "./Events";

export function Experience() {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Earth />
      </ScrollControls>
   
    </>
  );
}
