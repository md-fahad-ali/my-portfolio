import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CameraControls, Center, Environment, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei';
import { Model } from '@/components/Roomnew';
import TypingEffect from '@/components/TypingEffect';
import CameraPositionLogging from '@/helpers/CameraPositionLogging';
import { useControls } from 'leva';
import * as THREE from 'three'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";


function Loading() {
  const { progress } = useProgress();

  // Determine if loading is complete
  const isLoadingComplete = progress < 100;

  return (
    <div className={`w-full h-screen flex items-center justify-center bg-black absolute z-[999] ${isLoadingComplete ? '' : 'hidden'}`}>
      <p>{progress} Loading...</p>
    </div>
  );
}

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const orbitControlsRef = useRef();
  const cameraControlsRef = useRef();
  const modelRef = useRef();
  const [modRef,setModRef] = useState();
  // console.log(orbitControlsRef.current);


  const cameraConfig = useControls('Camera', {
    position: { value: [6.1511104366, 2.6882002163, -1.140921425], label: 'Position' },
    target: { value: [2, 10, 0], label: 'Target' },
    rotation: { value: [0, 0, 0], label: 'Rotation' },
    up: { value: 1, min: -1, max: 1, label: 'Up' },
    fov: { value: 30, min: 1, max: 120, label: 'FOV' },
    near: { value: 0.1, min: 0.01, max: 10, label: 'Near Clipping' },
    far: { value: 1000, min: 100, max: 5000, label: 'Far Clipping' },
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);

      // gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();

      
      console.log(modRef.position);
      tl.fromTo(modRef.position,{
        x:0,
      },{
        x:5
      })


    }, 2000); // Simulating initial loading time, replace with actual loading logic
  }, [cameraConfig.rotation, modRef.position]);

  return (
    <div className="w-full h-screen relative">
      <Canvas style={{ visibility: isClicked ? 'visible' : 'hidden' }} >
        <CameraPositionLogging event='mousedown' />

        <Suspense fallback={null}>

          <PerspectiveCamera
            position={[5.52, 2.22, 1.25]}
            rotateOnAxis={[1, 0, 9]}
            target={[2, 10, 0]}
            ref={cameraControlsRef}
            shadow={{
              bias: 0.001,
              near: 0.1,
              far: 1000,
              focus: 1,
              fov: 30,
            }}
            rotateY={10}
            // up={[0, cameraConfig.up, 0]}
            makeDefault
          />
          {/* <Environment /> */}
          <mesh
            ref={(el) => {
              modelRef.current = el
              setModRef(el)
            }}
            castShadow // Enable shadow casting
            receiveShadow // Enable shadow receiving
          >
            <Center>
              <Model />

            </Center>
          </mesh>
          <OrbitControls ref={orbitControlsRef} onUpdate={(e) => {
            console.log(e);
          }} />
        </Suspense>
      </Canvas>

      {/* {!isClicked && loading && <Loading />} */}

      {!isClicked && !loading && (
        <div className="w-full h-screen bg-black absolute top-0 left-0">
          <TypingEffect setIsClicked={setIsClicked} />
        </div>
      )}
    </div>
  );
}
