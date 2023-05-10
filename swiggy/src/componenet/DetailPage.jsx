import React from 'react'
import styled from 'styled-components'

const DetailPage = () => {
  const Section=styled.section`
      background-color: #ffffff;
      .container{
        height: 50rem;
        width: 60rem;
        border: 2px solid red;
        margin-left: 12rem;
        margin-top: 5rem;
        border-radius: 15px;
      }
      
  `
  return (
    <React.Fragment>
      <Section>
          <div className="container">
            <div className="Heading flex justify-between py-4 px-2.5">
                <div className="items border-2 border-blue-500 ">
                  <div className="Resturant-name font-sans text-lg font-bold">
                    La Pino's Pizza
                  </div>
                </div>
                <div className="items border-2 border-blue-500 w-28"></div>
                
            </div>
          </div>
      </Section>
    </React.Fragment>
  )
}

export default DetailPage

//i am create a section in that i make container which bring to center of page