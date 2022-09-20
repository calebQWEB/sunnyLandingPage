import React, {useState} from 'react'
import './nav.css'
import logo from '../../assets/logo.svg'
import hamburger from '../../assets/icon-hamburger.svg'

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu(prevState => !prevState)
  }

  return (
    <nav>
        <div className='sunnyside__nav-contaner'>
          <img src={logo} alt='logo' className='logo' />
          <div className='sunnyside__desktop-container'>
              <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Projects</a></li>
              </ul>
              <button type='button'>CONTACT</button>
          </div>
          <img 
            src={hamburger} 
            alt='hamburger' 
            className='hamburger' 
            onClick={toggleMenu}/>

            {
              mobileMenu && (

              <div className='sunnyside__mobile-container rotate-in-ver'>
                <ul>
                  <li><a href='#'>About</a></li>
                  <li><a href='#'>Services</a></li>
                  <li><a href='#'>Projects</a></li>
                </ul>
                <button type='button'>CONTACT</button>
              </div>)
            }
        </div>
    </nav>
  )
}

export default Nav