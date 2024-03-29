import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from '../Components/Scene/Scene'
import Controls from '../Components/Controls/Controls'
import Lights from '../Components/Lights/Lights'
import Camera from '../Components/Camera/Camera'

const R3FCanvas = ({currentYear, isAnimating}) => {
  return (
    <Canvas>
      <Scene currentYear={currentYear} isAnimating={isAnimating} />
      <Controls/>
      <Lights/>
      <Camera currentYear={currentYear} />
    </Canvas>
  )
}

export default R3FCanvas