import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'


// function App() {
//   const [count, setCount] = useState(0)
//   let myobj = {
//     username: "hitesh",
//     age: 23
//   }
//   let newArr = [1,2,3]

//   return (
//     <>
//       {/* <h1 className='bg-green-400 text-black p4 rounded-xl'>Tailwind test</h1> */}
//       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
//       <Card channel="chaiaurcode" someobj={newArr} />
//       <card/>
//     </>
//   )
// }

// export default App


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="Muntazir Abbas" />
      
    </>
  )
}

export default App