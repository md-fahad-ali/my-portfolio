
import { useGLTF, useTexture } from "@react-three/drei";
import React from "react";

import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/roomx.glb");
  const texture = useTexture("/textures/baked-room.jpg");
  texture.flipY = false;
  texture.colorSpace = THREE.sRGBEncoding;

  const textureMaterialun = new THREE.MeshStandardMaterial({
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
        geometry={nodes.Rectangle_2.geometry}
        material={textureMaterialun }
        position={[-6.773, 14.682, -3.429]}
        rotation={[-1.563, 0.018, 1.571]}
        scale={0.206}
      />
      <mesh
        geometry={nodes.Rectangle_2002.geometry}
        // material={nodes.Rectangle_2002.material}
         material={textureMaterialun }
        position={[-6.773, 14.682, -3.429]}
        rotation={[-1.563, 0.018, 1.571]}
        scale={0.206}
      />
      <mesh
        geometry={nodes.Rectangle_2003.geometry}
        // material={nodes.Rectangle_2003.material}
         material={textureMaterialun }
        position={[-6.773, 14.682, -3.429]}
        rotation={[-1.563, 0.018, 1.571]}
        scale={0.206}
      />
      <mesh
        geometry={nodes.Rectangle_2004.geometry}
        // material={nodes.Rectangle_2004.material}
         material={textureMaterialun }
        position={[-6.773, 14.682, -3.429]}
        rotation={[-1.563, 0.018, 1.571]}
        scale={0.206}
      />
      <mesh
        geometry={nodes.Rectangle_2007.geometry}
        // material={nodes.Rectangle_2007.material}
         material={textureMaterialun }
        position={[-6.773, 14.682, -3.429]}
        rotation={[-1.563, 0.018, 1.571]}
        scale={0.206}
      />
    </group>
  );
}

useGLTF.preload("/models/roomx.glb");
