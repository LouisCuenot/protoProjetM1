import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from '../Components/Scene/Scene'
import Controls from '../Components/Controls/Controls'
import Lights from '../Components/Lights/Lights'
import Camera from '../Components/Camera/Camera'

const R3FCanvas = () => {
  return (
    <Canvas>
      <Scene/>
      <Controls/>
      <Lights/>
      <Camera/>
    </Canvas>
  )
}

export default R3FCanvas