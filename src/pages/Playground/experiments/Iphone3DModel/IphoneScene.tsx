import { Model as Iphone } from "./Iphone_13_pro";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";

const IphoneControls = () => {
  const orbitControls = useRef<any>(null);

  return <OrbitControls ref={orbitControls} enablePan={false} />;
};

const IphoneScene = () => {
  return (
    <Canvas style={{ height: "400px" }} camera={{ position: [0, 0, 7], fov: 50 }}>
      <IphoneControls />
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 10]} intensity={0.5} />
        <Iphone />
      </Suspense>
    </Canvas>
  );
};

export default IphoneScene;
