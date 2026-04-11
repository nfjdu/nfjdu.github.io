import { Model as Iphone } from "./Iphone_13_pro";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { DirectionalLight } from "three";

const IphoneControls = () => {
  const directionalLight = useRef<DirectionalLight | null>(null);
  const orbitControls = useRef<any>(null);

  useFrame((state) => {
    if (directionalLight.current) directionalLight.current?.position.copy(state.camera.position);
  });
  return (
    <>
      <OrbitControls ref={orbitControls} />
      <directionalLight ref={directionalLight} intensity={1} position={[0, 0, 0]} />
    </>
  );
};

const IphoneScene = () => {
  return (
    <Canvas style={{ height: "400px" }}>
      <IphoneControls />
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <hemisphereLight intensity={0.5} />
        <Iphone />
      </Suspense>
    </Canvas>
  );
};

export default IphoneScene;
