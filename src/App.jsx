import Box from "./components/box";
import React, { useEffect } from "react";
import Particle from "./components/particles";
import Swal from "sweetalert2";

function App() {

 useEffect(()=>{
  Swal.fire({
    title:"Klik OK",
    icon:"warning"
  }).then((res)=>{
    if(res.isConfirmed){
      const audio = new Audio("/image/audiobg.mp3")
      audio.play();
    }
  })
 })
  return (
    <>
      <Particle />
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
