import React, { useState } from 'react';

function App() {
const [color, setcolor] = useState("");
  return (
    // Start-Body
    <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
      {/* Start-Position */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 rounded-xl">
        {/* Start-Bar */}
        <div className="flex flex-wrap justify-center gap-3 drop-shadow-2xl bg-white rounded-lg shadow-lg backdrop-grayscale px-4 py-2">
          {/*Start-Button  */}
        <button onClick={()=>{setcolor("red")}} className="bg-red-600 shadow-lg shadow-red-500/50 px-4 rounded-lg text-xl text-white">Red</button>
        <button onClick={()=>{setcolor("green")}} className="bg-green-600 shadow-lg shadow-green-500/50 px-4 rounded-lg text-xl text-white">Green</button>
        <button onClick={()=>{setcolor("blue")}} className="bg-blue-600 shadow-lg shadow-blue-500/50 px-4 rounded-lg text-xl text-white">Blue</button>
        <button onClick={()=>{setcolor("black")}} className=" bg-black shadow-lg shadow-gray-900/50 px-4 rounded-lg text-xl text-white">Black</button>
        <button onClick={()=>{setcolor("yellow")}} className="bg-yellow-600 shadow-lg shadow-yellow-500/50 px-4 rounded-lg text-xl text-white">Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
