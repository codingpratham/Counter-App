import React, { useState } from 'react';
import './App.css'

const App = () => {

  let [counter,setCounter]=useState(0)

  const Addvalue=()=>{
    counter+=1
    setCounter(counter)
  }

  const Removevalue=()=>{
    counter-=1
    setCounter(counter)
  }

  return (
    <>
    <div className='counterApp'>
    <h1>Counter App</h1>
    <h2>{counter}</h2>
    <button onClick={Addvalue}>Add</button>
    <button onClick={Removevalue}>Remove</button>
    </div>
    </>
  );
};

export default App;
