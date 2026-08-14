import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
let [counter,setcounter] = useState(15)

const addvalue = () => {
  // console.log("value added",Math.random());
  // console.log("clicked",counter);
  setcounter(counter + 1)
}


  // remove value function
  const removevalue = () =>{
    setcounter(counter - 1)
  }

  return(
    <>
    <h1>  chai aur code </h1>
    <h2>counter value:{counter}</h2>
    <button
    onClick={addvalue}
    >Add value{counter}</button>
    <br />
    <button
    onClick={removevalue}
    >remove value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}
export default App
