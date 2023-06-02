import React from 'react';
import '../styles/Home.css';
import SearchBar from '../components/SearchBar';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pets from '../assets/banner-image.jpg'
import dog from '../assets/dog.jpg';
import cat from '../assets/cat.jpg';
import otherPet from '../assets/other pet.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (

    <div className="homePage">

      {/* banner image */}
      <header style={{ paddingLeft: 0 }}>
        <div
          className='bannerImage'
          style={{
            backgroundImage: `url("${pets}")`,
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-area'>
                <h1 className='title'> Find your best friend today! </h1>
                <SearchBar id="filled-basic" label="Filled" variant="filled" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <h1 className='categories-title'> Have someone in mind? </h1>

      {/* categories to select dogs, cats, other pets */}
      <div className='categories'>

        {/* Dog Selection */}
        <div className='cardInfo'>
          
          <Link to="/dogcategory" style={{ textDecoration: 'none' }}>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia className='petSelect'
                  component="img"
                  image={dog}
                  alt="dog image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dogs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">

                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          </Link>
        </div>

        {/* Cat Selection */}
        <div className='cardInfo'>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia className='petSelect'
                component="img"
                image={cat}
                alt="cat image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cats
                </Typography>
                <Typography variant="body2" color="text.secondary">

                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </div>

        {/* Other Pet Selection */}
        <div className='cardInfo'>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia className='petSelect'
                component="img"
                image={otherPet}
                alt="other pet image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Other Pets
                </Typography>
                <Typography variant="body2" color="text.secondary">

                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </div>



      </div>

    </div>
  )
}

export default Home;