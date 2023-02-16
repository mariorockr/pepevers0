import React, { useRef } from "react"
import { useAnimations,useGLTF,useTexture } from "@react-three/drei"
import { useEffect } from "react"
import { useControls } from 'leva'
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three'
import { Material } from "three";

export default function Pepe() {  

    const model = useLoader(ColladaLoader, './painPepe.dae')//useGLTF('./painPepe.dae')

    const bakedTexture = useTexture('./BakedDiffuse.png')
    //bakedTexture.flipY = false

    const animations = useAnimations(model.animations, model.scene)

    const {animationName } = useControls({
        animationName : { options: animations.names}
    })
 
    model.scene.traverse( function( object ) {

        if ( object.isMesh ) {
    
            object.material.color.set( 0xffffff );

        }
    
    } );
    useEffect( () => {

    
         const action = animations.actions[animationName]
 
        action.reset().fadeIn(0.5).play()
        console.log(model)
        console.log(model.scene.children[0])
        model.scene.children[0].material = new THREE.MeshStandardMaterial({
            map: bakedTexture
        })
        return() => {

            action.fadeOut(0.5)
        }
    },[])

    return <primitive 
    castShadow
    receiveShadow
    object={model.scene} 
    scale={0.01}
    position={[0, 0, 0]}
    rotation-y={0.0}
    >


    </primitive>
}