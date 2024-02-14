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

  const [currentYear, setCurrentYear] = useState(0)
  const isAnimating = useRef(false)


  useEffect(()=>{


    const handleWheel = (e) => {
      if(!isAnimating.current){
        isAnimating.current = true
        if(e.deltaY > 0){
          if(currentYear === 0){
            setCurrentYear(1)
          }else if(currentYear === 1){
            setCurrentYear(2)
          }
        }else if(e.deltaY < 0){
          if(currentYear === 1){
            setCurrentYear(0)
          }else if(currentYear === 2){
            setCurrentYear(1)
          }
        }
      }
    }

    window.addEventListener('wheel',handleWheel)
    return ()=>window.removeEventListener('wheel', handleWheel)

  },[currentYear])








  return (
    <div className="App">
        <R3FCanvas currentYear={currentYear} isAnimating={isAnimating} />
        <UI currentyear={currentYear}/>
    </div>
  )
}

export default App
