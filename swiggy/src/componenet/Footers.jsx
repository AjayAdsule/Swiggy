import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
const Footers = () => {
    const Footer=styled.footer`
      height: 400px;
      margin-top: 3rem;
      background-color: #ff5733;
      color: white;
     
      .heading{
        padding-left: 3rem;
        padding-top: 1rem;
      }
      .ol{
        margin-top: 16px;
      }
      .list{
        padding-left: 3rem;
        margin-top: 10px;
      }
     .App-store{
        margin-top: 1rem;
     }
    `
  return (
    <React.Fragment>
      <Footer>
        <Grid container spacing={4} columnSpacing={{lg:2}}  justifyContent="space-evenly" >
          <Grid item lg={3} xl={3} md={3} sm={6} xs={6}  sx={{height:400}}>
            <div className="text-lg heading">Company</div>
            <ol className='ol'>
              <li className="list">About us</li>
              <li className="list">Team</li>
              <li className="list">Careers</li>
              <li className="list">Swiggy Blog</li>
              <li className="list">Bug Bounty</li>
              <li className="list">Swiggy One</li>
              <li className="list">Swiggy Corporate</li>
              <li className="list">Swiggy Instamart</li>
            </ol>
          </Grid>
          <Grid item lg={3} xl={3} md={3} sm={6} xs={6}>
          <div className="text-lg heading">Contact</div>
            <ol className='ol'>
              <li className="list">Help & Support</li>
              <li className="list">Partner with us</li>
              <li className="list">Ride with us</li>
              
            </ol>
          </Grid>
          <Grid item lg={3} xl={3} md={3} sm={6} xs={6} >
          <div className="text-lg heading">Legal</div>
            <ol className='ol'>
              <li className="list">Terms & Conditions</li>
              <li className="list">Refund & Cancellation</li>
              <li className="list">Privacy Policy</li>
              <li className="list">Cookie Policy</li>
              <li className="list">Offer Terms</li>
              <li className="list">Phishing & Fraud</li>
            </ol>
          </Grid>
          <Grid item lg={3} xl={3} md={3} sm={6} xs={6} 
          >
            <div className="plat-store">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Play-store" />
            </div>
            
            <div className="App-store">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="App-store" />
            </div>
          </Grid>
        </Grid>
      </Footer>
    </React.Fragment>
  )
}

export default Footers
