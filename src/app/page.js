"use client"

import React, { useState } from "react";

const App = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 5)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 5)
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      Fitness Tracker
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'red',
          padding: '4px',
          borderRadius: '3%',
          color: 'white',
        }}
          onClick={handleClick2}>Decrement</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'green',
          padding: '4px',
          borderRadius: '3%',
          color: 'white',
        }}
          onClick={handleClick1}>Increment</button>
      </div>
      <div style={{
        position: 'relative',
        top: '28vh',
      }}>
        <video width="600" controls >
          <source src="/Videos/Timer.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}
  
export default App