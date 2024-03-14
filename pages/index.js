import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CameraControls, Center, Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei';
import { Model } from '@/components/Roomnew';
import TypingEffect from '@/components/TypingEffect';
import CameraPositionLogging from '@/helpers/CameraPositionLogging';
import { useControls } from 'leva';
import * as THREE from 'three'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


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

const CameraScene = (props) => {

  // const cameraRef = useRef();
  const { cameraRef } = props;
  // const { cameraRotationX, cameraRotationY, cameraRotationZ } = useControls({
  //   cameraRotationX: 0,
  //   cameraRotationY: 0,
  //   cameraRotationZ: 0,
  // });

  useFrame(() => {
    // Update the camera's rotation based on Leva controls
    // cameraRef.current.rotation.set(cameraRotationX, cameraRotationY, cameraRotationZ);
  });

  return (
    <PerspectiveCamera
      position={[5.52, 2.22, 1.25]}

      target={[2, 10, 0]}
      ref={(el) => {
        // setTestRef(el);
        cameraRef.current = el;
      }}
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
  );
};

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const orbitControlsRef = useRef();
  const cameraControlsRef = useRef();

  const modControls = useControls('Model', {
    position: { value: [1, 1, 1], label: 'Position' },
    rotation: { value: [0, 0, 0], label: 'Rotation' },
  });

  const monControls = useControls('Monitor', {
    position: { value: [1.154, 1.709, -0.695], label: 'Position' },
    rotation: { value: [1.558, 0.013, -3.11], label: 'Rotation' },
  });
  // const pane = new Pane();
  //Model Reference
  const modelRef = useRef();
  const mainRef = useRef();
  const fRef = useRef();
  const sRef = useRef();
  const tRef = useRef();
  const fourRef = useRef();
  const cameraRef = useRef(null);
  const appRef = useRef();

  //Model Ref state
  const [modRef, setModRef] = useState();
  const [tesRef, setTestRef] = useState();
  const [firstRef, setFirstRef] = useState();
  const [secRef, setSecRef] = useState();
  const [thirdRef, setThirdRef] = useState();
  const [forthRef, setforthRef] = useState();
  const [menuRef, setMenuRef] = useState();

  // console.log(orbitControlsRef.current);
  console.log(modRef?.position);

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(modRef?.position, {
    x: 9
  }, {
    x: 7.5,
    y: 3.5,
    z: 2.8
  })
  gsap.to(tRef?.current, {
    opacity: 0,

  });

  console.log(appRef.current);

  console.log(modControls.position);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating initial loading time, replace with actual loading logic

    // gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl
      //Skills
      .fromTo(modRef?.position, {
        x: 7.5,
        y: 3.5,
        z: 2.8
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
        onComplete: () => {
          // tl.fromTo(tesRef?.position, {
          //   y: 2.22
          // }, {
          //   y: 0.3,
          //   scrollTrigger: {
          //     scroller: mainRef.current,
          //     trigger: sRef.current,
          //     start: "20% 20%",
          //     scrub: 0.1,
          //     markers: true,
          //     ease: "power1.inOut",
          //     yoyo: true,
          //     toggleActions: "reverse",
          //   },
          //   duration: 1,
          // })
          //   .fromTo(modRef?.position, {
          //     y: 2.84,
          //   }, {
          //     y: 1.5,
          //     scrollTrigger: {
          //       scroller: mainRef.current,
          //       trigger: sRef.current,
          //       start: "20% 20%",
          //       scrub: 0.1,
          //       markers: true,
          //       ease: "power1.inOut",
          //       yoyo: true,
          //       toggleActions: "reverse",
          //     },
          //     duration: 1,
          //   })


          tl.to(tesRef?.position, {
            x: 5.5,
            y: 0.5,
            z: 1.3,
            scrollTrigger: {
              scroller: mainRef.current,
              trigger: sRef.current,
              start: "20% 20%",
              scrub: 0.1,
              markers: true,
              ease: "power1.inOut",
              yoyo: true,
              toggleActions: "reverse",
            },
            duration: 1,
          })

        },
        duration: 1,
      })


      .to(modRef?.rotation, {
        y: 1.55,
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: sRef.current,
          start: "20% 20%",
          scrub: 0.1,
          markers: true,
          ease: "power1.inOut",
          yoyo: true,
          toggleActions: "reverse",
        },
        // onComplete: () => {
        //   console.log("I am starting");
        // },
        duration: 1,
      })
      .fromTo(modRef?.position, {
        x: 7.5,
        y: 2.84,
        z: 4.01,
      }, {
        x: 4.8,
        y: 1.5,
        z: 0.8,
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: sRef.current,
          start: "20% 20%",
          scrub: 0.1,
          markers: true,
          ease: "power1.inOut",
          yoyo: true,
          toggleActions: "reverse",
        },
        duration: 1,
      })

      .to(tRef.current, {
        visibility: true,
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: tRef.current,
          start: "20% 50%",
          scrub: 0.1,
          markers: true,
          ease: "power1.inOut",
          yoyo: true,
          toggleActions: "reverse",
        },
        onComplete: () => {
          gsap.to(tRef.current, {
            opacity: 1,
            toggleActions: "reverse",
          })
        },
        duration: 1,
      })
    console.log("Appref", appRef.current);
    // .fromTo(modRef?.position, {
    //   y: 2.84,
    // }, {
    //   y: 1.5,
    //   scrollTrigger: {
    //     scroller: mainRef.current,
    //     trigger: sRef.current,
    //     start: "20% 20%",
    //     scrub: 0.1,
    //     markers: true,
    //     ease: "power1.inOut",
    //     yoyo: true,
    //     toggleActions: "reverse",
    //   },
    //   onComplete: () => {
    //     tl.fromTo(tesRef?.position, {
    //       y: 0.3
    //     }, {
    //       y: 2.22,
    //       scrollTrigger: {
    //         scroller: mainRef.current,
    //         trigger: sRef.current,
    //         start: "20% 20%",
    //         scrub: 0.1,
    //         markers: true,
    //         ease: "power1.inOut",
    //         yoyo: true,
    //         toggleActions: "reverse",
    //       },
    //       duration: 1,
    //     })
    //       .fromTo(modRef?.position, {
    //         y: 2.84,
    //       }, {
    //         y: 1.5,
    //         scrollTrigger: {
    //           scroller: mainRef.current,
    //           trigger: sRef.current,
    //           start: "20% 20%",
    //           scrub: 0.1,
    //           markers: true,
    //           ease: "power1.inOut",
    //           yoyo: true,
    //           toggleActions: "reverse",
    //         },
    //         duration: 1,
    //       })
    //   },
    //   duration: 1,
    // })


    // .to(modRef?.rotation, {
    //   x: 0.0,
    //   y: 1.55,
    //   z: 0.00,
    //   scrollTrigger: {
    //     scroller: mainRef.current,
    //     trigger: sRef.current,
    //     start: "20% 20%",
    //     scrub: 0.1,
    //     markers: true,
    //     ease: "power1.inOut",
    //     yoyo: true,
    //     toggleActions: "reverse",
    //   },

    //   duration: 1,
    // })

    // .fromTo(modRef?.position, {
    //   x: 7.5,
    //   y: 2.84,
    //   z: 4.01,
    // }, {
    //   x: 5,
    //   y: 2.3,
    //   z: 1,
    //   scrollTrigger: {
    //     scroller: mainRef.current,
    //     trigger: sRef.current,
    //     start: "20% 20%",
    //     scrub: 0.1,
    //     markers: true,
    //     ease: "power1.inOut",
    //     yoyo: true,
    //     toggleActions: "reverse",
    //   },
    //   // onComplete: () => {
    //   //   tl
    //   //     .fromTo(modRef?.rotation, {
    //   //       x: 0.0,
    //   //       y: 1.55,
    //   //       z: 0.00,
    //   //     }, {
    //   //       x: 0.0,
    //   //       y: 0.03,
    //   //       z: 0.00,
    //   //       scrollTrigger: {
    //   //         scroller: mainRef.current,
    //   //         trigger: tRef.current,
    //   //         start: "20% 20%",
    //   //         scrub: 0.1,
    //   //         markers: true,
    //   //         ease: "power1.inOut",
    //   //         yoyo: true,
    //   //         toggleActions: "reverse",
    //   //       },
    //   //       duration: 1,
    //   //     })

    //   //     .to(modRef?.position, {
    //   //       x: 7.5,
    //   //       y: 3.5,
    //   //       z: 2.8,
    //   //       scrollTrigger: {
    //   //         scroller: mainRef.current,
    //   //         trigger: tRef.current,
    //   //         start: "20% 20%",
    //   //         scrub: 0.1,
    //   //         markers: true,
    //   //         ease: "power1.inOut",
    //   //         yoyo: true,
    //   //         toggleActions: "reverse",
    //   //       },

    //   //       duration: 1,
    //   //     })
    //   // },

    //   duration: 1,

    // })





    console.log("testRef", tesRef);
    console.log("modRef", modRef);


  }, [menuRef, modRef, modRef?.position, modRef?.rotation, tesRef]);

  return (
    <div className="w-full h-screen fixed">
      <Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }} style={{ visibility: isClicked ? 'visible' : 'hidden', position: 'fixed' }}
        className='fixed top-0 w-full pointer-events-none bg-transparent'>
        <CameraPositionLogging event='mousedown' />

        <Suspense fallback={null}>

          <PerspectiveCamera
            position={[5.52, 2.22, 1.25]}
            fov={50}
            target={[2, 10, 0]}
            ref={(el) => {
              setTestRef(el);
            }}
            shadow={{
              bias: 0.001,
              near: 0.1,
              far: 1000,
              focus: 1,
              fov: 30,
            }}
            // up={[0, cameraConfig.up, 0]}
            makeDefault
          />
          {/* <CameraScene cameraRef={cameraRef} /> */}
          {/* <Environment /> */}
          <mesh
            ref={(el) => {
              modelRef.current = el;
              // console.log(el);

              z: 4.01,
                setModRef(el);
            }}
            castShadow // Enable shadow casting
            receiveShadow // Enable shadow receiving
            position={modControls.position}
            rotation={modControls.rotation}
          >
            <Center>
              <Model ref={modelRef} />
            </Center>
          </mesh>
          <OrbitControls enableZoom={false} enableRotate={false} />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>

      {/* {!isClicked && loading && <Loading />} */}

      {!isClicked && !loading && (
        <div className="w-full h-screen bg-black absolute z-[99999] top-0 left-0">
          <TypingEffect setIsClicked={setIsClicked} />
        </div>
      )}

      <main
        ref={mainRef}
        className=" overflow-y-scroll overflow-x-hidden h-screen snap-mandatory snap-y "
      >

        <section
          ref={fRef}
          className="w-full  flex flex-col content-between items-center h-screen snap-center "
        >
        </section>
        <section
          ref={sRef}
          id="#design"
          className="w-full h-screen snap-center overflow-hidden  flex justify-center items-center"
        >
        </section>
        <section
          ref={tRef}
          className="w-full h-screen snap-center flex justify-center items-center"
        >

          {/* <Canvas
            camera={{
              position: [0, 0, 10],
              rotation: [0, 0, 0],
              fov: 75,
            }}
            // ref={(el) => {
            //   appRef.current = el;
            //   setMenuRef(el);
            // }}
            ref={appRef}
            className="fixed -z-1 top-0 w-full pointer-events-none bg-transparent"
          >
            <mesh
              className={"monitor"}
              position={[6.984, 6.57, -0.795]}
              rotation={[1.57, 0.02, -3.15]}
            >
              <Html
                className="w-[390px] scale-150 fixed h-[259px] bg-slate-800 text-white"
                style={{ transform: "rotateY(180deg) rotateZ(1deg)" }}
                distanceFactor={10}
                rotation-x={-Math.PI / 2}
                position={[0.0, -0.2, 0.0]}
                scale={1}
                transform
                fullscreen={false}
                occlude="blending"
                zIndexRange={99}
              // visible={false}
              >
                <div
                  className="w-[370px] h-[216px]"

                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <h1>Hello world</h1>
                </div>
              </Html>
            </mesh>
          </Canvas> */}
        </section>
        <section
          ref={fourRef}
          className="w-full h-screen snap-center flex justify-center items-center"
        >
        </section>
      </main>
    </div>
  );
}
