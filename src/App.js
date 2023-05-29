import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/footer/Footer'
import CollectionList from './components/Products/CollectionList'




const App = () => {
  return (
    <div>
     
      <Carousel/> 
      <CollectionList/>
      <Footer/>
    </div>
  )
}

export default App