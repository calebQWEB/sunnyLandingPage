import React from 'react'
import './header.css'
import arrow from '../../assets/icon-arrow-down.svg'

const Header = () => {
  return (
    <div className='sunnyside__header'>
        <h1>WE ARE CREATIVES</h1>
        <img src={arrow} alt='arrow' className='arrow'/>
    </div>
  )
}

export default Header