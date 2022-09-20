import React, {useState, useEffect} from 'react'
import './hero.css'
import { Text } from '../../components'
import {eggs, redGlass, redApples, tangerin} from '../../assets'
import {mobileEggs, mobileRedGlass, mobileRedApples, mobileTangerin} from '../../assets'

const Hero = () => {
  return (
    <section className='sunny__hero'>

        <div className='grid-item text-component'>
            <Text heading='Transform your brand'
            paragraph='We are a full-service creative agency spencializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
            learn='LEARN MORE'/>
        </div>


        <div className='grid-item'>
            <img src={eggs} alt='eggs' className='eggs'/>
        </div>

        <div  className='grid-item'>
            <img src={redGlass} alt='red glass' className='redGlass'/>
        </div>


        <div className='grid-item text-component'>
            <Text heading='Stand out to the right audience'
            paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
            learn='LEARN MORE'/>
        </div>


        <div className='redApples__main grid-item'>
      
            
            <div className='redApples__text-container'>
                <h1>Graphic Design</h1>
                <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention</p>
            </div>
        </div>

        <div className='tangerin__main grid-item'>
            <div className='tangerin__text-container'>
              <h1>Photography</h1>
              <p>Increase your credibility by getting the most stunning, high-quality photeos that improve your business image</p>
            </div>
        </div>
    </section>
  )
}

export default Hero