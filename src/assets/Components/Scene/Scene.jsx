import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

const Scene = ({currentYear}) => {

  const [aaa, setAaa] = useState({value:currentYear})

  const sossur = useRef()
  const sol = useRef()

  

  useEffect(()=>{
    sossur.current = {
      value:currentYear
    }
  },[])

  useEffect(()=>{
    gsap.to(sossur,{
      current:currentYear * Math.PI * 2,
      duration:3,
      onUpdate:()=>{
        ///console.log(sossur.current)
        setAaa(sossur.current)
      }
    })
    if(currentYear === 0){
      console.log(sol.current)
      gsap.to(sol.current.material.color,{
        r:1,
        g:0.85,
        b:0.6,
        duration:2
      })
    }else if(currentYear === 1){
      gsap.to(sol.current.material.color,{
        r:0,
        g:1,
        b:0.89,
        duration:2
      })
    }else if(currentYear === 2){
      gsap.to(sol.current.material.color,{
        r:1,
        g:1,
        b:1,
        duration:2
      })
    }
  },[currentYear])

  useEffect(()=>console.log(aaa),[aaa])

  return (
    <>
        <mesh rotation={[0,Math.PI*0.5,Math.PI*0.25]}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial transparent color={0xFF0000}/>
        </mesh>
        <mesh position={[Math.cos((Math.PI*2)+11)*5,0,Math.sin((Math.PI*2)+11)*5]} rotation={[0,Math.PI*0.5,Math.PI*0.25]}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial transparent color={0xFF0000} opacity={aaa > 11 ? 1 : 0}/>
        </mesh>
        <mesh position={[Math.cos((Math.PI*2)+9.8)*5,0,Math.sin((Math.PI*2)+9.8)*5]} rotation={[0,Math.PI*0.5,Math.PI*0.25]}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial transparent color={0xFF0000} opacity={aaa > 9.8 ? 1 : 0}/>
        </mesh>
        <mesh position={[Math.cos((Math.PI*2)+5)*5,0,Math.sin((Math.PI*2)+5)*5]} rotation={[0,Math.PI*0.5,Math.PI*0.25]}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial transparent color={0xFF0000} opacity={aaa > 5 ? 1 : 0}/>
        </mesh>
        <mesh position={[Math.cos((Math.PI*2)+7.5)*5,0,Math.sin((Math.PI*2)+7.5)*5]} rotation={[0,Math.PI*0.5,Math.PI*0.25]}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial transparent color={0xFF0000} opacity={aaa > 7.5 ? 1 : 0}/>
        </mesh>
        <mesh position={[Math.cos((Math.PI*2)+2)*5,0,Math.sin((Math.PI*2)+2)*5]} rotation={[0,Math.PI*0.5,Math.PI*0.25]}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial transparent color={0xFF0000} opacity={aaa > 2 ? 1 : 0}/>
        </mesh>
        <mesh 
          ref={sol}
          name='sol'
          rotation-x={-Math.PI*0.5}
        >
          <planeGeometry args={[50,50]}/>
          <meshBasicMaterial color={0x00FFFF}/>
        </mesh>
    </>
  )
}

export default Scene