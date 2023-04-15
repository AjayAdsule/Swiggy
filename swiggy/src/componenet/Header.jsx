import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import styled from 'styled-components'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack ,Container} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LoginIcon from '@mui/icons-material/Login';
import Filter from './Filter'


const Header = () => {
    const Headers=styled.header`
        .logo>img{
            height:70px;
        }
    `
  return (
    <>
    <Headers>
      <AppBar position="fixed" color="common">
        
        <Toolbar className='logo'>
         <img src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png" alt="logo" />
        <Box sx={{width:400,}}>
            <FormControl fullWidth>
                <InputLabel id="input-location">Location</InputLabel>
                <Select labelId='input-location-label'
                id='input-location'
                label="Location"
                >
                    <MenuItem value="mumbai">Mumbai</MenuItem>
                    <MenuItem value="delhi">Delhi</MenuItem>
                    <MenuItem value="Banglore">Banglore</MenuItem>
                </Select>
            </FormControl>
        </Box>
            <Stack sx={{marginLeft:30}}
            //  justifyContent="space-evenly"
           
             spacing={4}
             direction="row"
            >
                <Button variant='text' 
                sx={{color:"#000000"}}
                startIcon={<SearchIcon/>}
                >Search</Button>
                <Button variant='text'sx={{color:"#000000",marginTop:'5px'}} startIcon={<LocalOfferIcon/>} >Offers</Button>
                <Button variant='text'sx={{color:"#000000"}} startIcon={<HelpCenterIcon/>}>Help</Button>
                <Button variant='text'sx={{color:"#000000"}} startIcon={<LocalOfferIcon/>}>Sign-in</Button>
                <Button variant='text'sx={{color:"#000000"}} startIcon={<ShoppingCartIcon/>}>Cart</Button>
            </Stack>
        </Toolbar>
      </AppBar>
      </Headers>
      <Filter/>
    </>
  )
}

export default Header
