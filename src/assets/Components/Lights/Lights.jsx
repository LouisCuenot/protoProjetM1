import React from 'react'

const Lights = () => {
  return (
    <>
        <ambientLight args={[0xFFFFFF, 0.5]}/>
        <pointLight args={[0xFFFFFF, 20]} position={[-3,2,1]} />
    </>
  )
}

export default Lights