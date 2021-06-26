import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import './App.css';
import stage from "./core"

function App() {
  const canva = useRef(null)
  const [text, setText] = useState("")
  const handleChange = (event:React.FormEvent<HTMLInputElement>)=>{
    setText(event.currentTarget.value)
  }
  useEffect(()=>{
    stage.render(canva.current)

  },[])
  useEffect(()=>{
    stage.textRender(text)
    stage.render(canva.current)

  },[text])
  return (
    <div className="App">
      <h1>Don</h1>
      <input type="text"  onChange={handleChange}/>
        <canvas ref={canva} id="canvas"/>
        <h2>Don Branch</h2>
        <p>Really</p>
    </div>
  );
}

export default App;
