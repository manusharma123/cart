import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  const [price, setPrice] = useState(0)


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
      <div className='card' hidden={count>0}>
        <a onClick={add}> Add</a>
      </div>
      <div className='card' hidden={count==0}>
        
        <a onClick={sub}>-
        </a>{count}
        <a onClick={add}>+</a>
      </div>
      <p id='price1' hidden={price<250} >{price}</p>
    </>
  )
}


export default App
