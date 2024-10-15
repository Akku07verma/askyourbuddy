import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function QnA() {
  // const location = useLocation()
  // console.log(location.state.question)
  // OR
  const ques = localStorage.getItem("question");
  const [isOpen, setIsOpen] = useState(false);
  const [x, setX] = useState(750);
  const [y, setY] = useState(340);

  function randomize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const randomX = Math.floor(Math.random() * (width - 300));
    const randomY = Math.floor(Math.random() * (height - 300));
    setX(randomX);
    setY(randomY);
    console.log(randomX, randomY);
  }

  return (
    <div className="w-full h-screen bg-[#F4D6D3] pt-[200px]">
      <div className="bg-white w-[80%] m-auto p-4 items-center justify-center rounded-lg outline outline-7 outline-[#C95758] w-[700px] rounded-xl bg-transparent">
        <h1 className="text-center text-3xl font-bold mt-10 ">
          {" "}
          {/* {location.state.question} */}
          {/* OR */}
          {ques}
        </h1>
      </div>
      <div className="flex  flex-col m-8">
        <div className="flex m-auto ">
          {" "}
          <button
            className="px-3 py-2 bg-[#C95758] text-white w-[100px]  m-4 absolute left-[40%] rounded-lg text-xl"
            onClick={() => setIsOpen(true)}
          >
            Yes
          </button>
          {!isOpen && <button
            onMouseOver={randomize}
            className="px-3 z-[99] py-2 bg-[#FBF07B] w-[100px] m-4 absolute rounded-lg cursor-pointer text-xl"
            style={{ top: `${y}px`, left: `${x}px` }}
          >
            No
          </button>}
        </div>
        <img
          src="./img.gif"
          alt=""
          className="w-[500px] object-contain h-[400px] absolute -bottom-5 left-[50%] -translate-x-1/2"
        />
      </div>

      {/* Congrats */}
      {isOpen && (
        <div className="bg-[#FFFFD4] flex justify-center items-center w-full h-screen absolute top-0">
          <img className="w-[25%]" src="./celebrate.gif" alt="" />
        </div>
      )}
    </div>
  );
}
