import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [ques, setQues] = useState("");
  const navigate = useNavigate();
  function takeMeToQNA(){
    if(ques==""){
      alert("should i ask empty ques 😉?");
      return;
    }
    localStorage.setItem("question", ques)
    navigate("/qna")
                  // OR
    // navigate("/qna", {state: {question : ques}})
  } 
  return (
    <div className=' bg-[#ACBFD3] w-full h-screen flex flex-col items-center justify-evenly pt-10'>
       <div className=' flex flex-col items-center justify-center'>
       <h1 className='text-7xl font-bold m-4'>ENTER YOUR QUESTION</h1>
        <textarea value={ques} onChange={e => setQues(e.target.value)} type="text" placeholder='ask here' className='m-4 text-xl p-4 outline outline-7 outline-[#5990c9] w-[700px] rounded-xl bg-transparent' rows={4}/><br />
        <button onClick={takeMeToQNA} className=' bg-[#215891] text-white px-7 py-2 text-xl rounded-xl'> CREATE</button>
        </div>
        <img width={300} src="https://media1.tenor.com/m/LKY7hRX8ek8AAAAC/tonton-friends.gif" alt="" />
    </div>
  )
}
