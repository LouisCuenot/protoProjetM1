import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './assets/Components/Scene/Scene'
import Controls from './assets/Components/Controls/Controls'
import Lights from './assets/Components/Lights/Lights'
import Camera from './assets/Components/Camera/Camera'


function App() {


  return (
    <Canvas>
      <Scene/>
      <Controls/>
      <Lights/>
      <Camera/>
      
    </Canvas>
  )
}

export default App
