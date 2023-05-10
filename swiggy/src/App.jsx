import React from 'react'
import Header from './componenet/Header'
import Products from './Cards/Products'
import Footers from './componenet/Footers'
import DetailPage from './componenet/DetailPage'


const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Products/>
      <Footers/> 
      <DetailPage/>
    </React.Fragment>
  )
}

export default App
