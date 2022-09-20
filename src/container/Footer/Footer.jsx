import React from 'react'
import './footer.css'
import { facebook, instagram, twitter, pinterest } from '../../assets'

const Footer = () => {
  return (
    <footer>
        <h4>sunnyside</h4>
        <div className='sunny__footer-container'>
            <a href='#'>About</a>
            <a href='#'>Services</a>
            <a href='#'>Projects</a>
        </div>

        <div className='sunny__media'>
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={pinterest} />
        </div>
    </footer>
  )
}

export default Footer