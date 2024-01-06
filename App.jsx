import {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import './Components/style.css'
import Hero from './Components/Hero'
import Delivery from './Components/Delivery'
import Healthy from './Components/Healthy'
import MenuSlider from './Components/MenuSlider'
import Food from './Components/Food'
import Footer from './Components/Footer'

function App() {

  return (
   <>
   <Navbar />
   <Hero />
   < Delivery />
   < Healthy />
   <MenuSlider />
   <Food />
   <Footer />
   </>
  )
}

export default App
