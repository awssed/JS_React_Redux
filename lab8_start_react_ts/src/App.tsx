import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function CustomButton(title:string,callback:()=>void,disabled=false)
{
  return <button onClick={callback} disabled={disabled}>
    {title}
  </button>
}
function Counter()
{
  const [count,setCount]=useState(0);
  const [colorNum,setColorNum]=useState('Aqua');

  function increase()
  {
    if(count<5) {
      setCount(count + 1);
    }
    if(count==4)
    {
      setColorNum('red');
    }
  }
  function reset()
  {
    setCount(0);
    setColorNum('aqua')
  }
  return<>
    <h1 style={{ color: colorNum }}>{count}</h1>
    {CustomButton('increase', increase, count === 5)}
    {CustomButton('reset', reset, count === 0)}
  </>
}
export default Counter;
