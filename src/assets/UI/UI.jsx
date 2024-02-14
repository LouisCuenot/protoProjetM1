import React, { useEffect, useRef, useState } from 'react'
import './UI.scss'
import gsap from 'gsap'

const UI = ({
    currentyear
}) => {

  const dateI = useRef({value:1953})
  const [aaa, setAaa] = useState(dateI.current.value)

  useEffect(()=>{
    if(currentyear === 0){
      gsap.to(dateI.current,{
        value:1953,
        duration:5,
        onUpdate:()=>setAaa(Math.round(dateI.current.value))
      })
    }else if(currentyear === 1){
      gsap.to(dateI.current,{
        value:2024,
        duration:5,
        onUpdate:()=>setAaa(Math.round(dateI.current.value))
      })
    }else if(currentyear === 2){
      gsap.to(dateI.current,{
        value:2050,
        duration:5,
        onUpdate:()=>setAaa(Math.round(dateI.current.value))
      })
    }

  },[currentyear])


  return (
    <div className='ui'>
        <div className="horizontalContainer">
            <div className={`horizontalCircle ${currentyear === 0 ? 'active' : ''}`}/>
            <div className={`horizontalCircle ${currentyear === 1 ? 'active' : ''}`}/>
            <div className={`horizontalCircle ${currentyear === 2 ? 'active' : ''}`}/>
        </div>
        <span id="date">
          {aaa}
        </span>
    </div>
  )
}

export default UI