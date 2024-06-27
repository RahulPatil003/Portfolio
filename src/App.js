import React from 'react'
import "./App.css";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
const App = () => {
  return (
    <div>
      <Header></Header>
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  )
}

export default App
