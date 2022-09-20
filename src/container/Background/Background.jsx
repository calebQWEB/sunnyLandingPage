import React from 'react'
import './background.css'
import { Nav } from '../../components'
import { Header } from '../../components'
import orange from '../../assets/desktop/image-header.jpg'


const Background = () => {
  return (
    <header style={{backgroundImage: `url(${orange})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',}}>
        <Nav />
        <Header />
    </header>
  )
}

export default Background