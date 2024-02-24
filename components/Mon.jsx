import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/monkey.gltf");
  const texture = useTexture("/textures/baked.jpg");
  texture.flipY = false;
  texture.colorSpace = THREE.sRGBEncoding;
  
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Suzanne.geometry}
        // material={nodes.Suzanne.material}
        material={textureMaterial}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/monkey.gltf");


