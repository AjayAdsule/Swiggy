import React,{useEffect, useState} from 'react'
import Restaurants from './Res'
import { Grid } from '@mui/material'
import Product from './Product'

const AllProduct = () => {
  const [details, setDetails] = useState(Restaurants)
  useEffect(()=>{

    setDetails(Restaurants.Data)
    console.log(details)
  },[])
  return (
    <>
     <Grid container spacing={2}>
        {
          details.map((item)=>{
            return (
              <Grid item lg={2}>
              <Product image={item.Data.Image}></Product>
            </Grid>
            )
          })
        }
     </Grid>
    </>
  )
}

export default AllProduct
