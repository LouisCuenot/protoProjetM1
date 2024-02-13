import { PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useState, useRef  } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

const Camera = ({currentYear}) => {

    const sossur = useRef()


    const cam = useRef()

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(()=>{

      sossur.current = {
        value:currentYear
      }


        const resizeHandler = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener('resize',resizeHandler)

        return ()=>window.removeEventListener('resize', resizeHandler)
    },[])

    useEffect(()=>{
      gsap.to(sossur,{
        current:currentYear * Math.PI * 2,
        duration:3,
        onUpdate:()=>{
          cam.current.position.set(Math.cos(sossur.current)*5,2,Math.sin(sossur.current)*5)
        }
      })
    },[currentYear])

    useFrame(({camera})=>camera.lookAt(new THREE.Vector3(0,0,0)))




  return (
    <PerspectiveCamera ref={cam} makeDefault position={[Math.cos(currentYear*Math.PI*2)*5,2,Math.sin(currentYear*Math.PI*2)*5]} args={[60, width/height,1,1000]}/>
  )
}

export default Camera