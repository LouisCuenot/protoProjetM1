import React from 'react'

const Scene = () => {
  return (
    <>
        <mesh>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color={0xFF0000}/>
        </mesh>
    </>
  )
}

export default Scene