import React from 'react'
import './product.css'
import { bottles, plateOrange, cone, sugarCubes } from '../../assets'
import { mobileBottles, mobilePlateOrange, mobileCone, mobileSugarCubes } from '../../assets'

const Product = () => {
  return (
    <section className='sunny__product'>

      <div className='sunny__product-container'>
          <img src={bottles} alt='Bottles' className='bottles' />
          <img src={plateOrange} alt='Plate Orange' className='plateOrange' />
          <img src={cone} alt='Cone' className='cone' />
          <img src={sugarCubes} alt='Sugar Cubes' className='sugarCubes' />
      </div>
    </section>
  )
}

export default Product