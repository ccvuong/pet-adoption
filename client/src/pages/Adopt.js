import React from 'react';
import '../styles/Adopt.css';
import AdoptItem from '../components/AdoptItem';


function Adopt() {
  return (
    <div className='adoptPage'>

      <h1 className='title'>Friends available for adoption nearby</h1>

      <div className='petList'>
      <AdoptItem></AdoptItem>

      </div>
    </div>

  )
}

export default Adopt;