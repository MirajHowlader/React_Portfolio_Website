import React from 'react'
import Navbar from './components/navbar/Navbar'
import Herol from './components/hero/Herol'
import About from './components/about/About'
import Services from './components/services/Services'
import MyWork from './components/my-work/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Herol />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
 