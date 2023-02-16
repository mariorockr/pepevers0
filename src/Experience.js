import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import Fox from './Fox'
import Hamburger from './Hamburger'
import Pepe from './Pepe'

import Model from './Model'
import Placeholder from './Placeholder'


export default function Experience() {

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow
         position={[1, 2, 3]} 
         intensity={1.5}
         shadow-normalBias={0.04} />
        <ambientLight intensity={0.5} />

        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={20}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Suspense
            fallback={
              <Placeholder
              position-y={0.5}
              scale={[2, 3, 4]}
              ></Placeholder>
            }
        >
            
             <Pepe></Pepe>
        </Suspense>


    </>
}