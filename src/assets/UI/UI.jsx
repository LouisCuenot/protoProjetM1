import React, { useEffect } from 'react'
import './UI.scss'

const UI = ({
    currentyear
}) => {


  return (
    <div className='ui'>
        <div className="horizontalContainer">
            <div className={`horizontalCircle ${currentyear === 0 ? 'active' : ''}`}/>
            <div className={`horizontalCircle ${currentyear === 1 ? 'active' : ''}`}/>
            <div className={`horizontalCircle ${currentyear === 2 ? 'active' : ''}`}/>
        </div>
    </div>
  )
}

export default UI