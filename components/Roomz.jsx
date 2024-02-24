import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/Roomnew.gltf");
  const texture = useTexture("/textures/Roomz.jpg");
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBToLinear;

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
      <group position={[0, 2, 0]}>
        <group
          position={[1.633, -0.416, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        >
          <mesh
            geometry={nodes.Cube001__0.geometry}
            // material={nodes.Cube001__0.material}
            material={textureMaterial}
            position={[-0.134, 0.67, -0.515]}
            rotation={[0, 0, -1.557]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
        <group
          position={[1.633, -0.525, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        >
          <mesh
            geometry={nodes.Cube002_white_0.geometry}
            // material={nodes.Cube002_white_0.material}
            material={textureMaterial}
            position={[-0.044, 0.074, 0.24]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
        <group
          position={[0.24, -1.093, -0.293]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        >
          <mesh
            geometry={nodes.Cube003_white_0.geometry}
            // material={nodes.Cube003_white_0.material}
            material={textureMaterial}
            position={[-0.083, -0.052, -0.024]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
        <group
          position={[2.273, -1.056, 1.029]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            geometry={nodes.Cube012_Rgb_lighting_0.geometry}
            // material={nodes.Cube012_Rgb_lighting_0.material}
            material={textureMaterial}
            position={[-0.201, 0, -0.043]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
          <mesh
            geometry={nodes.Cube012_white_0.geometry}
            // material={nodes.Cube012_white_0.material}
            material={textureMaterial}
            position={[-0.09, -0.003, -0.035]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
        <group
          position={[1.139, -0.739, -0.327]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        >
          <mesh
            geometry={nodes.Cube016_black_cloth_0.geometry}
            // material={nodes.Cube016_black_cloth_0.material}
            material={textureMaterial}
            position={[0, 0, -0.001]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
        <group
          position={[1.371, -0.738, -0.284]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            geometry={nodes.Cube017_Material003_0.geometry}
            // material={nodes.Cube017_Material003_0.material}
            material={textureMaterial}
            position={[0, 0.068, 0.026]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
          <mesh
            geometry={nodes.Cube017_Rgb_lighting_0.geometry}
            // material={nodes.Cube017_Rgb_lighting_0.material}
            material={textureMaterial}
            position={[0, 0.064, 0.029]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
        <group
          position={[1.137, -0.811, -0.721]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            geometry={nodes.Cube022__0.geometry}
            // material={nodes.Cube022__0.material}
            material={textureMaterial}
            position={[0, -0.009, 0.132]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
        <group
          position={[1.054, -0.708, -0.305]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            geometry={nodes.Cube105_Material004_0.geometry}
            // material={nodes.Cube105_Material004_0.material}
            material={textureMaterial}
            position={[-0.054, -0.005, 0.018]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
          <mesh
            geometry={nodes.Cube105_Material005_0.geometry}
            // material={nodes.Cube105_Material005_0.material}
            material={textureMaterial}
            position={[-0.069, 0.016, -0.008]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
          <mesh
            geometry={nodes.Cube105_Rgb_lighting_0.geometry}
            // material={nodes.Cube105_Rgb_lighting_0.material}
            material={textureMaterial}
            position={[-0.052, -0.005, 0.01]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
        <group
          position={[0.139, -0.833, -0.701]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            geometry={nodes.Cylinder__0.geometry}
            // material={nodes.Cylinder__0.material}
            material={textureMaterial}
            position={[0, 0.001, -0.021]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
        <group
          position={[2.633, 0.193, 0.305]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.HoneyComb_Rgb_lighting_0.geometry}
            // material={nodes.HoneyComb_Rgb_lighting_0.material}
            material={textureMaterial}
            position={[-0.341, 1.13, -1.774]}
            rotation={[1.563, 0.004, 0.035]}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
      </group>
      <group
        position={[6.739, -0.224, 5.324]}
        rotation={[-3.065, 1.398, 3.047]}
        scale={0.01}
      >
        <group
          position={[510.136, 112.488, -668.516]}
          rotation={[0, -0.22, 0]}
          scale={0.689}
        >
          <mesh
            geometry={nodes.Cube_72002.geometry}
            // material={nodes.Cube_72002.material}
            material={textureMaterial}
            position={[61.844, 56.826, -5.115]}
            rotation={[-2.416, 0.148, -1.574]}
            scale={1.083}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
          <mesh
            geometry={nodes.Cube_72003.geometry}
            // material={nodes.Cube_72003.material}
            material={textureMaterial}
            position={[-132.55, 59.311, -5.5]}
            rotation={[-2.416, 0.148, -1.574]}
            scale={1.083}
          >
            <meshBasicMaterial map={texture}/>
          </mesh>
        </group>
      </group>
      <group
        position={[0.616, 1.356, -0.313]}
        rotation={[-2.369, 0.409, 3.064]}
      >
        <mesh
          geometry={nodes.Cylinder002_leaves_0.geometry}
          // material={nodes.Cylinder002_leaves_0.material}
          material={textureMaterial}
          position={[0.003, 0.024, -0.025]}
        >
          <meshBasicMaterial map={texture}/>
        </mesh>
      </group>
      <mesh
        geometry={nodes.object_0.geometry}
        // material={nodes.object_0.material}
        material={textureMaterial}
        position={[0.477, -1.642, -0.615]}
        rotation={[3.14, 0.206, -3.141]}
        scale={0.661}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube042.geometry}
        // material={nodes.Cube042.material}
        material={textureMaterial}
        position={[2.13, 2.622, -0.806]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube041.geometry}
        // material={nodes.Cube041.material}
        material={textureMaterial}
        position={[2.541, 2.292, -0.693]}
        rotation={[-0.056, 0.018, -1.876]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube040.geometry}
        // material={nodes.Cube040.material}
        material={textureMaterial}
        position={[2.541, 2.292, -0.693]}
        rotation={[-0.056, 0.018, -1.876]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube039.geometry}
        // material={nodes.Cube039.material}
        material={textureMaterial}
        position={[2.541, 2.292, -0.693]}
        rotation={[-0.056, 0.018, -1.876]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube038.geometry}
        // material={nodes.Cube038.material}
        material={textureMaterial}
        position={[2.541, 2.292, -0.693]}
        rotation={[-0.056, 0.018, -1.876]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube037.geometry}
        // material={nodes.Cube037.material}
        material={textureMaterial}
        position={[2.541, 2.292, -0.693]}
        rotation={[-0.056, 0.018, -1.876]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube036.geometry}
        // material={nodes.Cube036.material}
        material={textureMaterial}
        position={[2.541, 2.292, -0.693]}
        rotation={[-0.056, 0.018, -1.876]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube035.geometry}
        // material={nodes.Cube035.material}
        material={textureMaterial}
        position={[2.541, 2.292, -0.693]}
        rotation={[-0.056, 0.018, -1.876]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube034.geometry}
        // material={nodes.Cube034.material}
        material={textureMaterial}
        position={[2.604, 2.764, 0.248]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube033.geometry}
        // material={nodes.Cube033.material}
        material={textureMaterial}
        position={[1.154, 1.676, -0.718]}
        rotation={[1.558, 0.013, -3.11]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube_63002.geometry}
        // material={nodes.Cube_63002.material}
        material={textureMaterial}
        position={[-0.983, 1.041, 0.907]}
        rotation={[-1.562, 1.134, -1.581]}
        scale={[0.007, 0.005, 0.006]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube_63001.geometry}
        // material={nodes.Cube_63001.material}
        material={textureMaterial}
        position={[-0.985, 1.041, 1.596]}
        rotation={[-1.562, 1.134, -1.581]}
        scale={[0.007, 0.005, 0.006]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube_63.geometry}
        // material={nodes.Cube_63.material}
        material={textureMaterial}
        position={[-0.988, 1.041, 2.285]}
        rotation={[-1.562, 1.134, -1.581]}
        scale={[0.007, 0.005, 0.006]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube_60001.geometry}
        // material={nodes.Cube_60001.material}
        material={textureMaterial}
        position={[-0.574, 0.82, 2.287]}
        rotation={[-Math.PI / 2, 0, -1.575]}
        scale={[0.007, 0.005, 0.008]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube_59001.geometry}
        // material={nodes.Cube_59001.material}
        material={textureMaterial}
        position={[-0.566, 0.82, 1.598]}
        rotation={[-Math.PI / 2, 0, -1.575]}
        scale={[0.007, 0.005, 0.008]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube_58001.geometry}
        // material={nodes.Cube_58001.material}
        material={textureMaterial}
        position={[-0.563, 0.82, 0.909]}
        rotation={[-Math.PI / 2, 0, -1.575]}
        scale={[0.007, 0.005, 0.008]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube_57.geometry}
        // material={nodes.Cube_57.material}
        material={textureMaterial}
        position={[-0.643, 0.668, 1.597]}
        rotation={[-Math.PI / 2, 0, -1.575]}
        scale={0.006}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Room.geometry}
        // material={nodes.Room.material}
        material={textureMaterial}
        position={[1.664, 2.183, 0.545]}
        rotation={[0, -1.505, -Math.PI]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
      <mesh
        geometry={nodes.Cube043.geometry}
        // material={nodes.Cube043.material}
        material={textureMaterial}
        position={[2.604, 2.764, 0.248]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/Roomnew.gltf");
