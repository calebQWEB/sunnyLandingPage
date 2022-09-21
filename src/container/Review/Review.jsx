import React from 'react'
import './review.css'
import { Customer } from '../../components'
import { emily, thomas, jennie } from '../../assets'

const Review = () => {
  return (
    <section className='sunny__review'>

        <h1>CLIENT TESTIOMONIALS</h1>

        <div className='sunny__review-customers'>
        <Customer image={emily}
                  paragraph='We put our trust in Sunnyside and they delivered making sure our needs were met and deadlines were always hit.'
                  name='Emily R.'
                  position='Marketing Director'/>

        <Customer image={thomas}
                paragraph="Sunnyside's enthusiam coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                name='Thomas S.'
                position='Chief operation Officer'/>

        <Customer image={jennie}
                paragraph='Incredible and result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
                name='Jennie F.'
                position='Business Owner'/>
        </div>
    </section>
  )
}

export default Review