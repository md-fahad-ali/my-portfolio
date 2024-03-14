import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Center, CameraControls, ScrollControls, Scroll, Html, useScroll } from '@react-three/drei';
import { Model } from '@/components/Roomnew';
import TypingEffect from '@/components/TypingEffect';
import { useControls } from 'leva';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as THREE from 'three';
import { getProject } from '@theatre/core';

import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from '@theatre/r3f'
import { PerspectiveCamera } from '@theatre/r3f'
import demoProjectState from './state.json'

studio.initialize()
studio.extend(extension)
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')



function Loading() {
  // Assume you have the necessary setup for useProgress
  return <div>Loading...</div>;
}



export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const modelRef = useRef();
  const cameraRef = useRef();
  const mainRef = useRef();
  const fRef = useRef();

  // Check if the extension is not already registered before initializing and extending
  if (process.env.NODE_ENV === 'development') {
    studio.initialize()
    studio.extend(extension)
  }



 
  const demoSheet = getProject('Demo Project').sheet('Demo Sheet')


  const [modRef, setModRef] = useState();

  // const modControls = useControls('Model', {
  //   position: { value: [7.5, 1.4, 3.0], label: 'Position' },
  //   rotation: { value: [0, 0, 0], label: 'Rotation' },
  // });

  // const camControls = useControls('Model', {
  //   position: { value: [1, 1, 1], label: 'Position' },
  //   rotation: { value: [0, 0, 0], label: 'Rotation' },
  // });


  useEffect(() => {
    demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 10] }))
  }, [demoSheet.project.ready, demoSheet.sequence])


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const tl = gsap.timeline();


    tl.fromTo(
      cameraRef?.current?.position,
      {
        x: 9,
      },
      {
        x: 7.5,
        y: 3.5,
        z: 2.8,
        duration: 1,
      }
    );


    console.log("modRef", modRef);
    // modRef?.position.set(1,1,0)
    tl.fromTo(
      modRef?.position,
      {
        x: 9,
      },
      {
        x: 7.5,
        y: 1.4,
        z: 3.0,
        duration: 1,
      }
    );

    tl.fromTo(modRef?.position, {
      x: 7.5,
      y: 1.4,
      z: 3.0,
    }, {
      x: 7.5,
      y: 2.84,
      z: 4.01,
      scrollTrigger: {
        scroller: mainRef.current,
        trigger: fRef.current,
        start: "20% 20%",
        scrub: 0.1,
        // markers: true,
        ease: "power1.inOut",
        yoyo: true,
        toggleActions: "reverse",
      },

      duration: 1,
    })

    // Add your other animations with ScrollTrigger here

  }, [modRef, modelRef.position]);

  // Use GSAP for smooth updates



  return (
    <div className="w-full h-screen relative">
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
        className={`fixed top-0 w-full pointer-events-none bg-transparent canvasStyle`}
      >

        <Suspense fallback={null}>
          <SheetProvider sheet={getProject('Demo Project').sheet('Demo Sheet')}>
            {/* <CameraScene cameraRef={cameraRef} /> */}

            <PerspectiveCamera
              // ref={camera}
              theatreKey="Camera"
              position={[5.5, -0.3, 1.3]}
              rotation={[0, 0, 0]}
              shadow={{
                bias: 0.001,
                near: 0.1,
                far: 1000,
                focus: 1,
                fov: 30,
              }}
              makeDefault
            />
            <ScrollControls pages={3} damping={0.5}>

              <e.mesh
                theatreKey="Cube"
                // ref={(el) => {
                //   modelRef.current = el;
                //   setModRef(el);
                // }}
                castShadow
                receiveShadow
                position={[7.5, 1.4, 3.0]}
                rotation={[0, 0, 0]}
              >
                <Center>
                  <Model ref={modelRef} />
                </Center>
              </e.mesh>
              {/* <Html>
            <section className='h-[200vh]'>

            </section>
          </Html> */}
              <Scroll oll html className="snap-mandatory snap-y">
                <main className='h-screen' ref={mainRef}>
                  <section ref={fRef} className='w-full h-[100vh]' >

                  </section>
                </main>
              </Scroll>
            </ScrollControls>
            <OrbitControls enableZoom={false} enableRotate={false} />
          </SheetProvider>
        </Suspense>
      </Canvas>


    </div>
  );
}
