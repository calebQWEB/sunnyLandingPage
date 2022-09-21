import React from 'react'
import './footer.css'
import { facebook, instagram, twitter, pinterest } from '../../assets'

const Footer = () => {
  return (
    <footer>
        <h1>sunnyside</h1>
        <div className='sunny__footer-container'>
            <a href='#'>About</a>
            <a href='#'>Services</a>
            <a href='#'>Projects</a>
        </div>

        <div className='sunny__media'>
            <img src={facebook} alt='facebook'/>
            <img src={instagram} alt='instagram'/>
            <img src={twitter} alt='twitter'/>
            <img src={pinterest} alt='pinterest'/>
        </div>
    </footer>
  )
}

export default Footer