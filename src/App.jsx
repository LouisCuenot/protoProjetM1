import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './assets/Components/Scene/Scene'
import Controls from './assets/Components/Controls/Controls'
import Lights from './assets/Components/Lights/Lights'
import Camera from './assets/Components/Camera/Camera'
import R3FCanvas from './assets/R3FCanvas/R3FCanvas'
import UI from './assets/UI/UI'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'


function App() {

  const currentYear = useRef()

  useEffect(()=>{

    currentYear.current = 0

    const handleWheel = (e) => {
      if(e.deltaY > 0){
        if(currentYear.current === 0){
          gsap.to(currentYear,{
            current:1,
            duration:3,
            onUpdate:()=>console.log(currentYear.current)
          })
        }else if(currentYear.current === 1){
          gsap.to(currentYear,{
            current:2,
            duration:3,
            onUpdate:()=>console.log(currentYear.current)
          })
        }
      }else if(e.deltaY < 0){
        if(currentYear.current === 1){
          gsap.to(currentYear,{
            current:0,
            duration:3,
            onUpdate:()=>console.log(currentYear.current)
          })
        }else if(currentYear.current === 2){
          gsap.to(currentYear,{
            current:1,
            duration:3,
            onUpdate:()=>console.log(currentYear.current)
          })
        }
      }

      if(currentYear.current === 0 || currentYear.current === 2){
        
      }
      
      
    }

    window.addEventListener('wheel',handleWheel)
    return ()=>window.removeEventListener('wheel', handleWheel)

  },[currentYear])

  useEffect(()=>console.log(currentYear.current, 'BBBBBBB'),[currentYear])






  return (
    <div className="App">
        <R3FCanvas/>
        <UI currentyear={currentYear.current}/>
    </div>
  )
}

export default App
