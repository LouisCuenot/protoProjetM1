import React, { useEffect } from 'react'
import './UI.scss'

const UI = ({
    currentyear
}) => {

    useEffect(()=>console.log(currentyear, 'AAAAAAAAAA'),[])

  return (
    <div className='ui'>
        <div className="horizontalContainer">
            <div className={`horizontalCircle ${currentyear < 0.1 ? 'active' : 'a'}`}/>
            <div className={`horizontalCircle ${currentyear === 1 ? 'active' : 'a'}`}/>
            <div className={`horizontalCircle ${currentyear === 2 ? 'active' : 'a'}`}/>
        </div>
    </div>
  )
}

export default UI