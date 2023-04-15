import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Filter = () => {
    const Section=styled.section`
        .filter-title{
            flex-grow: 2;
            paddng:10px
        }
        .filter-content{
            flex-grow: 1;
        }
        .typo-heading{
            padding: 10px;
        }
        .typo-content{
            padding: 10px;
        }
    `
  return (
    <>
    <Section>
      <Box sx={{
            width: '79rem',
            height: '50px',
            border: '2px solid pink',
            marginTop: '6rem',
            marginLeft: '3rem',
            background:'#ffffff'
      }}>
       <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
        >
            <div className="filter-title">
                <Typography variant='h5' gutterBottom component="h3" className='typo-heading'> Resturant Available</Typography>
            </div>
            <div className="filter-content">
                <Typography variant="body1" className='typo-content'>Relavance</Typography>
            </div>
            <div className="filter-content">
                <Typography variant="body1" className='typo-content'>Delivery Time</Typography>
            </div>
            <div className="filter-content">
                <Typography variant="body1" className='typo-content'>Rating</Typography>
            </div>
            <div className="filter-content">
                <Typography variant="body1" className='typo-content'>Cost Low To High</Typography>
            </div>
            <div className="filter-content">
                <Typography variant="body1" className='typo-content'>Cost High To Low</Typography>
            </div>
            <div className="filter-content">
                <Typography variant="body1" className='typo-content'>Filter</Typography>
            </div>
        </Stack>
      </Box>
     </Section>        
    </>
  )
}

export default Filter
