import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function petList({ name, image, type }) {
  return (
    <div className='petListings'>

      <div className='pet'>
        <Card>

          <CardActionArea>

            <CardMedia
              component="img"
              id='imageCard'
              style={{ backgroundImage: `url("${image}")` }}

            />

            <CardContent id="content">

              <Typography gutterBottom variant="h5" component="div">
                <p className='name'>{name}</p>

              </Typography>

              <Typography variant="body2" color="text.secondary">
                <p className='type'>{type}</p>

              </Typography>

            </CardContent>

          </CardActionArea>

          <CardActions>
            <Button size="small" color="primary">
              <p className='petBtn'>Check me out!</p>
            </Button>
            <FavoriteIcon id='heartIcon'/>
          </CardActions>

        </Card>
      </div>
    </div>
  );
}

