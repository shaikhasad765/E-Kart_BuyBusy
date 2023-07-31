// Import required libraries and styles
import React from "react";
import { useState, useEffect } from "react";
import '../../Styles/Clock.css'

// Define the Clock component
const Clock = () => {

  // Hooks to manage the state for days, hours, minutes, and seconds
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  // Function to calculate the countdown
   const countDown = ()=>{
    const destination = new Date ("Dec 25, 2023").getTime()
    interval = setInterval(() => {
      const  now = new Date().getTime()
      const different= destination -now;

      // Calculate days, hours, minutes, and seconds left until the destination date
      const days= Math.floor(different/(1000*60*60*24))
      const hours = Math.floor(different % (1000 * 60 *60 *24)/(1000*60*60))
      const minutes = Math.floor(different % (1000 * 60 *60)/(1000*60))
      const seconds = Math.floor(different % (1000 * 60 )/1000)

      // If the destination date has passed, stop the countdown by clearing the interval
      if(destination <0){
        clearInterval(interval.current)
      }
      // Update the state with the calculated days, hours, minutes, and seconds
      else{
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }

    });
   }

   // Run the countdown function once the component is mounted
   useEffect(()=>{
    countDown();
    // Clean up the interval when the component is unmounted
   })


  


  // Return the clock display with days, hours, minutes, and seconds
  return (
    <div className="clock__wrapper d-flex  align-items-center gap-5">
      {/* Days */}
      <div className="clock__data d-flex  align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{days}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      {/* Hours  */}
      <div className="clock__data d-flex  align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{hours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      {/* Minutes  */}
      <div className="clock__data d-flex  align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{minutes}</h1>
          <h5 className="text-white fs-6">Minute</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      {/* Seconds */}
      <div className="clock__data d-flex  align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{seconds}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

// Export the Clock component to make it available for other parts of the application
export default Clock;
