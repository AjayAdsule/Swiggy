import React, { useEffect,useState } from 'react'
import Restaurants from '../componenet/Res'
import Cards from './Cards'
import { Grid } from '@mui/material'

const Products = () => {
    const [product, setProduct] = useState([Restaurants])
    useEffect(()=>{
        setProduct(Restaurants.Data)
        console.log(product)
    })
  return (
    <React.Fragment> 
            <Grid container columnSpacing={{md:3,lg:3 ,sm:2,xl:10}} rowSpacing={4} sx={{
                paddingTop:5,
                paddingLeft:8
            
            }}>
                {
                    product.map((items)=>{
                        const {Restaurant_name, Description,Rating,Delivery_Time,Per_Person,Image,id}=items
                        return(
                            <Grid item xl={3}lg={3} md={3} sm={3} xs={6} key={id}>
                                <Cards 
                                Title={Restaurant_name} 
                                image={Image}
                                description={Description} 
                                rating={Rating}
                                price={Per_Person}
                                Delivery_Time={Delivery_Time}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
    </React.Fragment>
  )
}

export default Products

//