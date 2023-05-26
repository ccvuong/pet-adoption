import React from 'react';
import '../styles/Contact.css'


function Contact() {
  return (
    <div className='contact'>

      <div className='contactInfo'>
        <h2> Let's Chat! 🐾</h2>

        <p className='summary'>
          Spotted a friend you want to meet?
        </p>

        <p className='contactMe'>
          Shoot us an email at {' '} 
          <a
            href="mailto:petadoption@gmail.com"
            id="email"
          >
            pet-adoption@gmail.com
          </a>
          {' '} to meet your furry friend!
        </p>
      </div>

    </div>
  )
}

export default Contact