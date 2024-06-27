import React from 'react'
import "./App.css";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
const App = () => {
  return (
    <div>
      <Header></Header>
      <main className='main'>
        <Home/>
      </main>
    </div>
  )
}

export default App
