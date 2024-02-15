import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Html, useScroll, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import './Scene.scss'
import Im from './im.png'

const Tente = ({value, scale, aaa, currentYear}) => {

  const tent = useRef()

  useEffect(()=>{

    if(currentYear === 0){

      gsap.to(tent.current.material.color,{
        r:1,
        g:0.5 ,
        b:0.1,
        duration:2
      })
    }else if(currentYear === 1){
      gsap.to(tent.current.material.color,{
        r:0,
        g:1,
        b:0.5,
        duration:2
      })
    }else if(currentYear === 2){
      gsap.to(tent.current.material.color,{
        r:0.5,
        g:1,
        b:0,
        duration:2
      })
    }
  },[currentYear])
  return(
      <mesh ref={tent} position={[Math.cos((Math.PI*2)+value)*scale,0,Math.sin((Math.PI*2)+value)*scale]} rotation={[0,Math.PI*0.5,Math.PI*0.25]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial transparent color={0xFF0000} opacity={aaa > value ? 1 : 0}/>
      </mesh>
  )
}

const TenteHoverable = ({value, scale, aaa, currentYear}) => {

  const tent = useRef()

  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(()=>{

    if(currentYear === 0){

      gsap.to(tent.current.material.color,{
        r:1,
        g:0.5 ,
        b:0.1,
        duration:2
      })
    }else if(currentYear === 1){
      gsap.to(tent.current.material.color,{
        r:0,
        g:1,
        b:0.5,
        duration:2
      })
    }else if(currentYear === 2){
      gsap.to(tent.current.material.color,{
        r:0.5,
        g:1,
        b:0,
        duration:2
      })
    }
  },[currentYear])
  return(
      <>
        <mesh onClick={()=>setIsClicked(!isClicked)} onPointerEnter={()=>setIsHovered(true)} onPointerLeave={()=>setIsHovered(false)} ref={tent} position={[Math.cos((Math.PI*2)+value)*scale,0,Math.sin((Math.PI*2)+value)*scale]} rotation={[0,Math.PI*0.5,Math.PI*0.25]}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial transparent color={0xFF0000} opacity={aaa > value ? 1 : 0}/>
        </mesh>
        {
          isHovered &&
          <mesh position-x={-1}>
            <sphereGeometry args={[0.7,32,32]} />
            <meshBasicMaterial color={0xFF9D2A}  />
          </mesh>
        }
        
        <Html
          as='div'
          position={[-2,1.5,0]}
          className={`aa ${isClicked ? 't' : ''}`}
          center
          prepend
        >
          <p>AAAAA</p>
          <img src={Im} alt="" />
        </Html>
      </>
  )
}

const Scene = ({currentYear, isAnimating}) => {

  const aa = useTexture('/bb.jpg')

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
      },
      onComplete:()=>isAnimating.current = false
    })
    if(currentYear === 0){
      console.log(sol.current)
      gsap.to(sol.current.material.color,{
        r:1,
        g:0.86 ,
        b:0.57,
        duration:2
      })
    }else if(currentYear === 1){
      gsap.to(sol.current.material.color,{
        r:0,
        g:0.9,
        b:0.9,
        duration:2
      })
    }else if(currentYear === 2){
      gsap.to(sol.current.material.color,{
        r:0.6,
        g:1,
        b:0.9,
        duration:2
      })
    }
  },[currentYear])

  return (
    <>
        <fog attach="fog" color={0xffffff} near={8} far={15} />
        <TenteHoverable currentYear={currentYear} aaa={100} value={0} scale={0}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={11} scale={5}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={9.8} scale={5.5}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={1} scale={7}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={5.3} scale={8}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={1} scale={5}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={12} scale={8}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={7} scale={6}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={3} scale={9}/>

        <Tente  currentYear={currentYear}  aaa={aaa} value={4} scale={7}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={5} scale={5.5}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={6} scale={10}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={7} scale={8}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={8} scale={5}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={9} scale={12}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={10} scale={6}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={11} scale={9}/>

        <Tente  currentYear={currentYear}  aaa={aaa} value={1} scale={7}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={2} scale={5.5}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={3} scale={10}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={4} scale={8}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={8} scale={5}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={9} scale={12}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={10} scale={6}/>
        <Tente  currentYear={currentYear}  aaa={aaa} value={11} scale={9}/>
        
        <mesh 
          ref={sol}
          name='sol'
          rotation-x={-Math.PI*0.5}
        >
          <planeGeometry args={[20,20]}/>
          <meshBasicMaterial color={0x00FFFF} map={aa}/>
        </mesh>
    </>
  )
}

export default Scene