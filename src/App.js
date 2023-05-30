import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/footer/Footer'
import CollectionList from './components/Products/CollectionList'
import Navbar from './components/Navbar/Navbar'
import MayRoutes from './components/routes/MayRoutes'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <MayRoutes/>
      <CollectionList/>
      <Footer/>

    </div>
  )
}

export default App