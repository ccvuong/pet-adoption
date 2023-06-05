import React from 'react';
import '../styles/Adopt.css';
import AdoptItem from '../components/AdoptItem';
import { AdoptResults } from '../helpers/AdoptResults';
import Button from '@mui/material/Button';

function Adopt() {
  return (
    <div className='adoptPage'>

      <h1 className='title'>Friends available for adoption nearby</h1>

      <div className='petList'>

        <div className='petsNearby'>

          {AdoptResults.map((item, index) => {

            return (

              <AdoptItem
                name={item.name}
                image={item.image}
                type={item.type}
                key={index}
              >

              </AdoptItem>
            )
          })}

        </div>

      </div>

      <Button variant="contained" id='seeMoreBtn'>See More</Button>
    </div>

  )
}

export default Adopt;