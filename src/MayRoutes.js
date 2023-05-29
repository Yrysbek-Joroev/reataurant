import React from 'react'
import BaseCollection from './components/rout/ BaseCollection';
import Bodysuit from './components/rout/ Bodysuit';
import BrasBriefs from './components/rout/ BrasBriefs';
import Linen from './components/rout/Linen';
import WeddingLingerie from './components/rout/ WeddingLingerie';
import Bestsellers from './components/rout/Bestsellers';
import Cotton from './components/rout/Cotton';
import Swimwear from './components/rout/Swimwear';
import VerySexy from './components/rout/VerySexy';
import { Route, Routes } from 'react-router-dom';


const MayRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/base", element: <BaseCollection />, id: 1 },
    { link: "/body", element: <Bodysuit />, id: 2 },
    { link: "/bras", element: <BrasBriefs />, id: 3 },
    { link: "/wedding", element: <WeddingLingerie/>, id: 4 },
    { link: "/bestseller", element: <Bestsellers />, id: 6 },
    { link: "/cotton", element: <Cotton />, id: 7 },
    { link: "/linen", element: <Linen />, id: 8 },
    { link: "/swimwear", element: <Swimwear />, id: 9 },
    { link: "/very", element: <VerySexy />, id: 10 },
  ]

  return (
    <>
    <Routes>
      {PUBLIC_ROUTES.map((item)=>(
        <Route path={item.link} element={item.element} key={item.id}/>
      ))}
    </Routes>
    </>
  )
}


export default MayRoutes




