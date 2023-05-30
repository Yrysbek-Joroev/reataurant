import React from "react";
import BaseCollection from "./ BaseCollection";
import Bodysuit from "./ Bodysuit";
import BrasBriefs from "./ BrasBriefs";
import Linen from "./Linen";
import WeddingLingerie from "./ WeddingLingerie";
import Bestsellers from "./Bestsellers";
import Cotton from "./Cotton";
import Swimwear from "./Swimwear";
import VerySexy from "./VerySexy";
import { Route, Routes } from "react-router-dom";

const MayRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/base", element: <BaseCollection />, id: 1 },
    { link: "/body", element: <Bodysuit />, id: 2 },
    { link: "/bras", element: <BrasBriefs />, id: 3 },
    { link: "/wedding", element: <WeddingLingerie />, id: 4 },
    { link: "/bestseller", element: <Bestsellers />, id: 5 },
    { link: "/cotton", element: <Cotton />, id: 7 },
    { link: "/linen", element: <Linen />, id: 8 },
    { link: "/swimwear", element: <Swimwear />, id: 9 },
    { link: "/very", element: <VerySexy />, id: 10 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MayRoutes;
