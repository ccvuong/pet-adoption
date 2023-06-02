import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// pet images
import BobaCat from '../assets/Boba.jpg';

export default function petList() {
  return (
    <div className='petListings'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={BobaCat}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Boba
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Boba was surrendered to us by her owners. She is 3 years of age and loves to sleep on your lap.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </div>
  );
}

