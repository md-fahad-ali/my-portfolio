import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import r3fExtension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from '@theatre/r3f'
import { PerspectiveCamera } from '@theatre/r3f'
import demoProjectState from './state.json'

studio.initialize()
studio.extend(r3fExtension)
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

const Make = () => {

  useEffect(() => {
    demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 1] }))
  }, [])


  return (
    <div className='h-[100vh] w-full'>
      <Canvas
        camera={{
          position: [5, 5, -5],
          fov: 75,
        }}

      >
        <SheetProvider sheet={getProject('Demo Project').sheet('Demo Sheet')}>
          <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75} />
          <ambientLight />
          <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
          <e.mesh theatreKey="Cube">
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </e.mesh>
        </SheetProvider>
      </Canvas>
    </div>
  )
}

export default Make
