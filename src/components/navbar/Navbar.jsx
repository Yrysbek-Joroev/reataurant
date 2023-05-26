import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "./Navbar.css";
// import { Popover, Typography } from "@mui/material";
const Navbar = () => {
  //   const [anchorEl, setAnchorEl] = React.useState(null);
  //   const handlePopoverOpen = (evevnt) => {
  //     setAnchorEl(evevnt.currentTarget);
  //   };
  //   const handlePopoverClose = () => {
  //     setAnchorEl(null);
  //   };
  //   const isPopoverOpen = Boolean(anchorEl);
  return (
    <div>
      <div className="reclama">
        <h3>Бесплатная доставка при заказе на 4000$</h3>
      </div>
      <div>
        <div className="navbtopp">
          <div className=" numbb">
            <span>+996700039009</span>
          </div>
          <div className="telega">
            <NearMeIcon />
            <span className="region">Регион: Бишкек</span>
          </div>
          <div className="incantto">
            <h1>INCANTO</h1>
            <p className="italy">ITALY</p>
          </div>
          <div className="iconss">
            <PlaceIcon />
            <SearchIcon />
            <PermIdentityIcon />
            <FavoriteBorderIcon />
            <LocalMallIcon />
          </div>
        </div>
      </div>
      <div>
        <div className="categori">
          <div>БЕСТСЕЛЛЕРЫ</div>
          <div>КУПАЛЬНИКИ</div>
          <div>НОВИНКИ</div>
          <div>VERY SEXY</div>
          <div>БЮСГАЛЬТЕРЫ И ТРУСЫ</div>
          <div>БАЗОВАЯ КОЛЛЕКЦИЯ</div>
          <div>БОДИ</div>
          <div>ХЛОПОК</div>
          <div>БЕЛЬЕ</div>
          <div>ОДЕЖДА</div>
          <div className="typp">
            <div>OUTLET</div>
            <div>СВАДЕБНОЕ БЕЛЬЕ</div>
            <div>КОЛГОТКИ И НОСКИ</div>
            <div>ОБУВЬ</div>
            <div>ДЕТЯМ</div>
            <div>МУЖЧИНАМ</div>
            <div>ПОСЛЕДНИЙ РАЗМЕР</div>
            <div>ПОДАРОЧНЫЕ СЕРТИФИКАТЫ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
