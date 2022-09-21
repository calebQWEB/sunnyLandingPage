import React from 'react'
import './customer.css'


const Customer = (props) => {
  return (
    <div className='customer-components'>
        <img src={props.image} alt='customer image'/>
        <p>{props.paragraph}</p>
        <h3>{props.name}</h3>
        <span>{props.position}</span>
    </div>
  )
}

export default Customer