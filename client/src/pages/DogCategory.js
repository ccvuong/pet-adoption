import React from 'react'
import '../styles/Adopt.css';
import AdoptItem from '../components/AdoptItem';
import { DogResults } from '../helpers/DogResults';
import Button from '@mui/material/Button';


function DogCategory() {
    return (
        <div className='adoptPage'>

            <h1 className='title'>Dogs near you! </h1>

            <div className='petList'>

                <div className='petsNearby'>

                    {DogResults.map((item, index) => {

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

export default DogCategory