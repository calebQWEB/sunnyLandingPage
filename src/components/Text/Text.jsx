import React from 'react'
import './text.css'

const Text = (props) => {
  return (
    <div className='sunny__text-component'>
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
        <span>{props.learn}</span>
    </div>
  )
}

export default Text