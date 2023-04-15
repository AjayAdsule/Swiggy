import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'

const Cards = (props) => {
  return (
    <React.Fragment>
        <Card sx={{maxWidth:270}}>
            <CardActionArea>
                <CardMedia 
                component="img"
                height="200"
                image={props.image}
                alt="Res-Img"
                />
                <CardContent>
                    <Typography variant='body1' component="div">
                       {props.Title}
                    </Typography>
                    <Typography variant='body2' component="div">
                       {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Stack direction='row' spacing={2}  justifyContent="space-between">
                    <Typography variant='span' component='div'>
                        {props.rating}
                    </Typography>
                    <Typography variant='span' component='div'>
                        {props.Delivery_Time}
                    </Typography>
                    <Typography variant='span' component='div'>
                         {props.price}
                    </Typography>
                </Stack>
            </CardActions>
        </Card>
    </React.Fragment>
  )
}

export default Cards
