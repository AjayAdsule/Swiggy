import { Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const Product = (props) => {
  return (
    <>
      <Card sx={{maxWidth: 250}}>
       <img src={props.image} alt="foods" />
        <CardContent>
            <Typography variant="h6" component="div" sx={{fontSize:15,fontWeight:'600'}}>
                {props.title}
            </Typography>
            <Typography variants="body2" sx={{fontSize:12}}>
              {props.description}
            </Typography>
            <Stack direction="row">
                <div id="Rating" className="card-details">
                    <Button startIcon={<StarIcon/>}>{props.rating}</Button>
                </div>
                <div id="Delivery-Time" className="card-details">
                    <Button>{props.deliver_time}</Button>
                </div>
                <div id="Per-person" className="card-details">
                    <Button>{props.price}</Button>
                </div>
            </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Product
