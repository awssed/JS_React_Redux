import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function CustomButton(title,callback:(),disabled=false)
{
  return <button onClick={callback} disabled={disabled}>
    {title}
  </button>
}
function Counter()
{
  const [count,setCount]=useState(0);
  function increase()
  {
    if(count<5)
    {
      setCount(count+1);
    }
  }
  function reset()
  {
    setCount(0);
  }
  return<>
    <h1>{count}</h1>
    {CustomButton('increase', increase, count === 5)}
    {CustomButton('reset', reset, count === 0)}
  </>
}
export default Counter;
