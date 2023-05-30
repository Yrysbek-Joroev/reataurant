import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div
        className="nav-big"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2%",
          marginBottom: "2%",
          alignItems: "center",
        }}
      >
        <div>
          <span>8 800 77 500 77</span>
        </div>
        <div>
          <NearMeIcon /> <span>Регион: Бишкек</span>
        </div>
        <div className="incanto">
          <h1>INCANTO</h1>
          <span>ITALY</span>
        </div>
        <div className="icon">
          <LocationOnIcon /> <SearchIcon /> <FavoriteBorderIcon />
          <WorkOutlineIcon />
        </div>
      </div>
      <div className="routi">
        <p>Бестселлеры</p>
        <p>Купальники</p>
        <p>VERY SEXY</p>
        <p>Бюсгальтеры и трусы</p>
        <p>Базовая коллекция</p>
        <p>Боди</p>
        <p>Хлопок</p>
        <p>Белье</p>
        <p>Свадебное белье</p>
      </div>
    </div>
  );
};

export default Navbar;
