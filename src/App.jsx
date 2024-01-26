import Box from "./components/box";
import React, { useState } from "react";
import Particle from "./components/particles"

function App() {


  return (
    <>
    <Particle/>
      <div className="w-full h-screen">
        <div className="ucapan absolute mt-24 flex flex-col w-screen text-center font-bold text-red-300 ">
          <h1 className="font-Montserrat text-3xl">HAPPY</h1>
          <h1 className="font-Satisfy text-5xl">Valentine's</h1>
          <h1 className="font-Montserrat text-2xl">Day</h1>
        </div>
        <Box />

      </div>
    </>
  );
}

export default App;
