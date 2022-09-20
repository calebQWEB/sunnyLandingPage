import React, { useState } from 'react'
import './App.css'
import {Background, Hero, Review, Product, Footer} from './container'

function App() {

  return (
    <div className="App">
        <Background />
        <Hero />
        <Review />
        <Product />
        <Footer />
    </div>
  )
}

export default App
