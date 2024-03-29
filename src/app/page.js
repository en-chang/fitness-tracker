"use client"

import React, { useEffect, useState } from "react";

export const revalidate = 0;

const App = () => {
  const [counter, setCounter] = useState('Loading...');

  useEffect(() => {
    const requestCount = async () => {
      try {
        const response = await fetch(`https://fitness-tracker-enchang.vercel.app/api/get-count`, {
          method: 'GET',
          cache: 'no-store' 
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
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
        const response = await fetch(`https://fitness-tracker-enchang.vercel.app/api/decrement`, {
          method: 'PUT'
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
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
        const response = await fetch(`https://fitness-tracker-enchang.vercel.app/api/increment`, {
          method: 'PUT'
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
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
        const response = await fetch(`https://fitness-tracker-enchang.vercel.app/api/reset`, {
          method: 'PUT'
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
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
    <div className="min-h-screen flex flex-col justify-around">
      <h1 className="pt-8 text-center text-5xl">
        Fitness Tracker
      </h1>
      <p className="text-center text-5xl">
        {counter}
      </p>
      <div className="pt-8">
        <div className="flex justify-center space-x-4">
          <button
            className="focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md px-5 py-2 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <button
            className="focus:outline-none bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md px-5 py-2 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={handleIncrement}
          >
            Increment
          </button>
        </div>
        <div className="flex justify-center pt-4">
          <button
            className="focus:outline-none bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-300 font-medium rounded-md px-10 py-2 mr-2 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <video className="max-h-80 w-fit" controls >
          <source src="/Videos/Timer.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}
  
export default App