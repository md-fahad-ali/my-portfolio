import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Center, CameraControls, ScrollControls, Scroll, Html, useScroll } from '@react-three/drei';
import { Model } from '@/components/Roomx';
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
import demoProjectState from './animations/state.json'
import Modal from 'react-responsive-modal';
import Image from 'next/image';

// studio.initialize()
// studio.extend(extension)

// const CameraScene = (props) => {

//   // const cameraRef = useRef();
//   const { cameraRef } = props;
//   const { cameraRotationX, cameraRotationY, cameraRotationZ } = useControls({
//     cameraRotationX: 0,
//     cameraRotationY: 1.55,
//     cameraRotationZ: 0,
//   });

//   const camControls = useControls('Camera', {
//     position: { value: [8.8, -0.2, 0.6], label: 'Position' },
//   });

//   useFrame(() => {
//     // Update the camera's rotation based on Leva controls
//     cameraRef.current.rotation.set(cameraRotationX, cameraRotationY, cameraRotationZ);
//     if (window.innerWidth > window.innerHeight) {
//       console.log("upper");
//       // cameraRef.current.fov = 0.3;
//     } else {
//       // cameraRef.current.fov = 0.1;
//     }
//   });

//   return (
//     <PerspectiveCamera
//       position={camControls.position}
//       theatreKey="Camera"
//       target={[2, 10, 0]}
//       ref={(el) => {
//         // setTestRef(el);
//         cameraRef.current = el;
//       }}
//       shadow={{
//         bias: 0.001,
//         near: 0.1,
//         far: 1000,
//         focus: 1,
//         fov: 30,
//       }}
//       rotateY={10}

//       // up={[0, cameraConfig.up, 0]}
//       makeDefault
//     />
//   );
// };


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


  const modelRef = useRef();
  const cameraRef = useRef();
  const camera = useRef();
  const mainRef = useRef();
  const fRef = useRef();


  // if (process.env.NODE_ENV === 'development') {
  //   studio.initialize()
  //   studio.extend(extension)
  // }




  // cameraRef?.current?.rotation.set(0, -1, 0);
  const [open, setOpen] = useState(false);
  const [mdata, setMdata] = useState([]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  function openModal() {
    setOpen(true)
  }



  const demoSheet = getProject('sheet', { state: demoProjectState }).sheet('sheet')
  // const demoSheet = getProject('Demo').sheet('sheet')

  const [modRef, setModRef] = useState();

  // const modControls = useControls('Model', {
  //   position: { value: [7.5, 1.4, 3.0], label: 'Position' },
  //   rotation: { value: [0, 0, 0], label: 'Rotation' },
  // });



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 6] }))
  }, [])


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
        style={{ pointerEvents: 'none' }}
        // style={{ visibility: isClicked ? 'visible' : 'hidden', position: 'fixed' }}
        className={`fixed top-0 w-full pointer-events-none bg-transparent canvasStyle`}
      >
        <SheetProvider sheet={demoSheet}>
          <Suspense fallback={null}>
            {/* <CameraScene cameraRef={cameraRef} /> */}

            <PerspectiveCamera
              // ref={camera}
              theatreKey="Camera"
              position={[8.8, -0.2, 0.6]}
              rotation={[0, 0, 0]}
              shadow={{
                bias: 0.001,
                near: 0.1,
                far: 1000,
                focus: 1,
                fov: 30,
              }}
              // rotateY={10}
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
                position={[11, 1.4, 1.71]}
                rotation={[0, 1.55, 0]}
              >

                <Center>
                  <Model ref={modelRef} mdata={mdata} setMdata={setMdata} setOpen={setOpen} />
                </Center>
              </e.mesh>


              <Scroll oll html className="snap-mandatory snap-y">



              </Scroll>
            </ScrollControls>
            <OrbitControls enableZoom={false} enableRotate={false} />
          </Suspense>
        </SheetProvider>
      </Canvas>

      {/* {!isClicked && !loading && (
        <div className="w-full h-screen bg-black absolute z-[999999999] top-0 left-0">
          <TypingEffect setIsClicked={setIsClicked} />
        </div>
      )} */}


      <div className={`backdrop-blur-[30px] ${open ? 'flex' : 'hidden'} top-0 left-0 w-screen justify-center items-center fixed h-screen z-[9999999]`}>
        <button className='text-black bg-white p-3 absolute right-7 top-5' onClick={() => {
          setOpen(false)
        }}>✖</button>
        <div className=' bg-slate-800 p-5 font-bold text-white h-auto w-[50%] rounded-3xl'>
          <h1 className=' text-3xl'>{mdata?.name}</h1>
          <br />
          <div className='flex justify-center w-full'>
            <Image
              src={mdata?.image}
              alt={mdata?.name}
              className={` rounded-lg `}
              width={700}
              height={700}
            />
          </div>
          <br />
          <div className=' px-10'>
            <h3 className='text-2xl'>Description</h3>
            <p className=' font-normal'>{mdata?.description}</p>
            <br />
            <p>Tags</p>

            <div className='flex gap-3'>
              {mdata?.tags?.map((el, i) => (
                <div key={i}>
                  <p className='font-normal'>#{el}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
