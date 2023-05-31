import React from "react";
import Linen from "../Products/Linen";
import Bestsellers from "../Products/Bestsellers";
import Cotton from "../Products/Cotton";
import Swimwear from "../Products/Swimwear";
import VerySexy from "../Products/VerySexy";
import { Route, Routes } from "react-router-dom";
import WeddingLingerie from "../Products/ WeddingLingerie";
import Bodysuit from "../Products/ Bodysuit";
import BrasBriefs from "../Products/ BrasBriefs";
import BaseCollection from "../Products/ BaseCollection";

const MayRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/base", element: <BaseCollection />, id: 1 },
    { link: "/body", element: <Bodysuit />, id: 2 },
    { link: "/bras", element: <BrasBriefs />, id: 3 },
    { link: "/wedding", element: <WeddingLingerie />, id: 4 },
    { link: "/bestseller", element: <Bestsellers />, id: 6 },
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
