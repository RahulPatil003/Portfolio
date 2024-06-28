import React from 'react'
import "./App.css";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Qualification from './Components/Qualification/Qualification';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/ScrollUp/ScrollUp';

const App = () => {
  return (
    <div>
      <Header></Header>
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>


        <Footer />
        <ScrollUp />
    </div>
  )
}

export default App
