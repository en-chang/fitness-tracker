"use client"

import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0)
  
  const handleDecrement = () => {
    setCounter(counter - 5)
  }
  
  const handleIncrement = () => {
    setCounter(counter + 5)
  }

  const handleReset = () => {
    setCounter(0)
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
      top: '-13%',
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
          onClick={handleDecrement}
        >
          Decrement
        </button>
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
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
      <div>
      <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'grey',
          padding: '4px',
          borderRadius: '3%',
          color: 'white',
        }}
          onClick={handleReset}
      >
        Reset
      </button>
      </div>
      <div style={{
        position: 'relative',
        top: '25vh',
      }}>
        <video width="600" controls >
          <source src="/Videos/Timer.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}
  
export default App