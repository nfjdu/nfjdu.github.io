/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/manhood/Downloads/iphone_13_pro.glb --types 
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iphone-13-pro-0c34a039d50e42f4b46738ec26929c15
Title: iPhone 13 Pro
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Body002_Mic_0: THREE.Mesh;
    Body002_Bezel_0: THREE.Mesh;
    Body002_Body_0: THREE.Mesh;
    Body002_Wallpaper_0: THREE.Mesh;
    Body002_Camera_Glass_0: THREE.Mesh;
    Body002_Lens_0: THREE.Mesh;
    Body002_Material_0: THREE.Mesh;
    Camera002_Body_0: THREE.Mesh;
    Camera002_Glass_0: THREE.Mesh;
    Camera002_Camera_Frame001_0: THREE.Mesh;
    Camera002_Mic_0: THREE.Mesh;
    Body003_Screen_Glass_0: THREE.Mesh;
    Button001_Frame_0: THREE.Mesh;
    Circle001_Frame_0: THREE.Mesh;
    Apple_Logo001_Logo_0: THREE.Mesh;
    Camera004_Body_0: THREE.Mesh;
    Camera004_Gray_Glass_0: THREE.Mesh;
    Camera004_Flash_0: THREE.Mesh;
    Camera004_Port_0: THREE.Mesh;
    Camera004_Camera_Frame_0: THREE.Mesh;
    Camera004_Camera_Glass_0: THREE.Mesh;
    Camera004_Lens_0: THREE.Mesh;
    Camera004_Black_Glass_0: THREE.Mesh;
    Camera005_Material002_0: THREE.Mesh;
    Frame001_Frame_0: THREE.Mesh;
    Frame001_Port_0: THREE.Mesh;
    Frame001_Antenna_0: THREE.Mesh;
    Frame001_Frame2_0: THREE.Mesh;
    Frame001_Mic_0: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
    Bezel: THREE.MeshStandardMaterial;
    Body: THREE.MeshStandardMaterial;
    Wallpaper: THREE.MeshStandardMaterial;
    Camera_Glass: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    ["Camera_Frame.001"]: THREE.MeshStandardMaterial;
    Screen_Glass: THREE.MeshStandardMaterial;
    Frame: THREE.MeshStandardMaterial;
    Logo: THREE.MeshStandardMaterial;
    Gray_Glass: THREE.MeshStandardMaterial;
    Flash: THREE.MeshStandardMaterial;
    Port: THREE.MeshStandardMaterial;
    Camera_Frame: THREE.MeshStandardMaterial;
    Black_Glass: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    Antenna: THREE.MeshStandardMaterial;
    Frame2: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/iphone_13_pro.glb") as GLTFResult;
  const group = useRef<any>();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      // group.current.rotation.z = 0.02 - (1 + Math.sin(t / 1.5)) / 20;
      group.current.rotation.x = 0;
      group.current.rotation.y = t / 1.8;
    }
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <group position={[0, -2, 0]} rotation={[0, 0, 0]}>
        <group rotation={[Math.PI / 2, Math.PI, 0]} scale={0.01}>
          <group scale={500}>
            <mesh geometry={nodes.Frame001_Frame_0.geometry} material={materials.Frame} />
            <mesh geometry={nodes.Frame001_Port_0.geometry} material={materials.Port} />
            <mesh geometry={nodes.Frame001_Antenna_0.geometry} material={materials.Antenna} />
            <mesh geometry={nodes.Frame001_Frame2_0.geometry} material={materials.Frame2} />
            <mesh geometry={nodes.Frame001_Mic_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Body002_Mic_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Body002_Bezel_0.geometry} material={materials.Bezel} />
            <mesh geometry={nodes.Body002_Body_0.geometry} material={materials.Body} />
            <mesh geometry={nodes.Body002_Wallpaper_0.geometry} material={materials.Wallpaper} />
            <mesh
              geometry={nodes.Body002_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh geometry={nodes.Body002_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.Body002_Material_0.geometry} material={materials.Material} />
            <mesh geometry={nodes.Camera002_Body_0.geometry} material={materials.Body} />
            <mesh geometry={nodes.Camera002_Glass_0.geometry} material={materials.Glass} />
            <mesh
              geometry={nodes.Camera002_Camera_Frame001_0.geometry}
              material={materials["Camera_Frame.001"]}
            />
            <mesh geometry={nodes.Camera002_Mic_0.geometry} material={materials.material} />
            <mesh
              geometry={nodes.Body003_Screen_Glass_0.geometry}
              material={materials.Screen_Glass}
            />
            <mesh geometry={nodes.Button001_Frame_0.geometry} material={materials.Frame} />
            <mesh geometry={nodes.Circle001_Frame_0.geometry} material={materials.Frame} />
            <mesh geometry={nodes.Apple_Logo001_Logo_0.geometry} material={materials.Logo} />
            <mesh geometry={nodes.Camera004_Body_0.geometry} material={materials.Body} />
            <mesh
              geometry={nodes.Camera004_Gray_Glass_0.geometry}
              material={materials.Gray_Glass}
            />
            <mesh geometry={nodes.Camera004_Flash_0.geometry} material={materials.Flash} />
            <mesh geometry={nodes.Camera004_Port_0.geometry} material={materials.Port} />
            <mesh
              geometry={nodes.Camera004_Camera_Frame_0.geometry}
              material={materials.Camera_Frame}
            />
            <mesh
              geometry={nodes.Camera004_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh geometry={nodes.Camera004_Lens_0.geometry} material={materials.Lens} />
            <mesh
              geometry={nodes.Camera004_Black_Glass_0.geometry}
              material={materials.Black_Glass}
            />
            <mesh
              geometry={nodes.Camera005_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/iphone_13_pro.glb");
