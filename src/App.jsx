import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(1)
  
  const [price, setPrice] = useState(250)


  function sub(){
    setCount((count)=>count-1)
    setPrice((price)=>price-250)
  }

  function add(){
    setCount((count)=>count+1)
    setPrice((price)=>price+250)
  }

  return (
    <>
      <h1>Cart</h1>
      <div className='card'>
        <button disabled={count==0} className='button' onClick={sub}>-</button>
        <p>{count}</p>
        <button className='button' onClick={add}>+</button>
      </div>
      <p id='price1' hidden={price<250} >{price}</p>
    </>
  )
}


export default App
