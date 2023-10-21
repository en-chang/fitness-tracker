"use client"

import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState('Loading...');

  useEffect(() => {
    const requestCount = async () => {
      try {
        const response = await fetch(`https://fitness-tracker-enchang.vercel.app/get-count`);
        const jsonResponse = await response.json();
        const repCount = jsonResponse.result.rows[0].rep;
        setCounter(repCount);
      } catch (err) {
        if (err.response) {
          console.log(err);
        } else {
          console.log(`Error: ${err}`);
        }
      }
    }

    requestCount();
  }, [])
  
  const handleDecrement = () => {
    const requestDecrement = async () => {
      try {
        const response = await fetch(`https://fitness-tracker-enchang.vercel.app/decrement`, { method: 'PUT' });
        const jsonResponse = await response.json();
        setCounter(counter - 5)
      } catch (err) {
        if (err.response) {
          console.log(err);
        } else {
          console.log(`Error: ${err}`);
        }
      }
    }
    requestDecrement();
  }
  
  const handleIncrement = () => {
    const requestIncrement = async () => {
      try {
        const response = await fetch(`https://fitness-tracker-enchang.vercel.app/increment`, { method: 'PUT' });
        const jsonResponse = await response.json();
        setCounter(counter + 5)
      } catch (err) {
        if (err.response) {
          console.log(err);
        } else {
          console.log(`Error: ${err}`);
        }
      }
    }
    requestIncrement();
  }

  const handleReset = () => {
    const requestReset = async () => {
      try {
        const response = await fetch(`https://fitness-tracker-enchang.vercel.app/reset`, { method: 'PUT' });
        const jsonResponse = await response.json();
        setCounter(0)
      } catch (err) {
        if (err.response) {
          console.log(err);
        } else {
          console.log(`Error: ${err}`);
        }
      }
    }
    requestReset();
  }
  
  return (
    <div className="m-6 p-10">
      <h1 className="flex justify-center text-center pt-14 text-5xl">
        Fitness Tracker
      </h1>
      <p className="flex justify-center py-16 text-5xl">
        {counter}
      </p>
      <div className="flex justify-center space-x-4">
        <button
          className="focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="focus:outline-none bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md px-5 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
      <div className="flex justify-center mt-2 mb-12">
        <button
          className="focus:outline-none bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-300 font-medium rounded-md px-10 py-2 mr-2 mb-2 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="flex justify-center mt-24">
        <video className="max-h-80" controls >
          <source src="/Videos/Timer.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}
  
export default App