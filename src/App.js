import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/footer/Footer'
import CollectionList from './components/Products/CollectionList'
import Navbar from './components/navbar/Navbar'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <CollectionList/>
      <Footer/>
    </div>
  )
}

export default App