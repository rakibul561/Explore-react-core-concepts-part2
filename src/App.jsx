import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'


function App() {


  function handleClick() {
    alert('please click a btn')

  }


  return (
    <>

      <h1>React Core concepts part 2</h1>
           
        

      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Add</button>

    </>
  )
}

export default App
