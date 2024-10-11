import React, { useState } from "react";

function App() {
  const [color, setcolor] = useState("white");
  return (
    <div>
      <div
        className="h-screen flex flex-col justify-center"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-2xl text-center font-bold p-4">
          Background Color Changer
        </h1>
        <div className="mt-80">
          <div className="bg-stone-500 cursor-pointer flex m-10 font-bold justify-between rounded-2xl p-2 h-15 mx-20 ">
            <div
              onClick={() => setcolor("rgb(59 130 246)")}
              className="bg-blue-500 rounded-3xl px-4 py-2"
            >
              Blue
            </div>

            <div
              onClick={() => setcolor("rgb(34 197 94)")}
              className="bg-green-500 rounded-3xl px-4 py-2"
            >
              Green
            </div>

            <div
              onClick={() => setcolor("rgb(20 184 166)")}
              className="bg-teal-500 rounded-3xl px-4 py-2"
            >
              Teal
            </div>

            <div
              onClick={() => setcolor("rgb(16 185 129)")}
              className="bg-emerald-500 rounded-3xl px-4 py-2"
            >
              Emerald
            </div>

            <div
              onClick={() => setcolor("rgb(234 179 8)")}
              className="bg-yellow-500 rounded-3xl px-4 py-2"
            >
              Yellow
            </div>

            <div
              onClick={() => setcolor("rgb(239 68 68)")}
              className="bg-red-500 rounded-3xl px-4 py-2"
            >
              Red
            </div>

            <div
              onClick={() => setcolor("rgb(249 115 22)")}
              className="bg-orange-500 rounded-3xl px-4 py-2"
            >
              Orange
            </div>

            <div
              onClick={() => setcolor("black")}
              className="bg-black text-white rounded-3xl px-4 py-2"
            >
              Black
            </div>

            <div
              onClick={() => setcolor("white")}
              className="bg-white rounded-3xl px-4 py-2"
            >
              White
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
