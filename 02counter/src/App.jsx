import { useState } from 'react'
import React from 'react'
import './App.css'

const App = () => {

  let [counter, setcounter] = useState(0)

  // let counter = 0

  const addValue = () => {
    if (counter < 20) {
      setcounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter} </h2>

      <button onClick={addValue}>Add value</button> 
      <br />
      <button onClick={removeValue} >remove value</button>
    </>
  )
}

export default App
