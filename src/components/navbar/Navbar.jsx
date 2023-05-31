import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav-big">
        <div className="left">
          <p>8 800 77 500 77</p>
          <span style={{ display: "flex", alignItems: "center" }}>
            <NearMeIcon style={{ width: "20px" }} /> Регион: Бишкек
          </span>
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
        <Link
          to="/bestseller"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Бестселлеры</p>
        </Link>
        <Link to="/swimwear" style={{ textDecoration: "none", color: "black" }}>
          <p>Купальники</p>
        </Link>
        <Link to="/very" style={{ textDecoration: "none", color: "black" }}>
          <p>VERY SEXY</p>
        </Link>
        <Link to="/bras" style={{ textDecoration: "none", color: "black" }}>
          <p>Бюсгальтеры и трусы</p>
        </Link>
        <Link to="/base" style={{ textDecoration: "none", color: "black" }}>
          <p>Базовая коллекция</p>
        </Link>
        <Link to="/body" style={{ textDecoration: "none", color: "black" }}>
          <p>Боди</p>
        </Link>
        <Link to="/cotton" style={{ textDecoration: "none", color: "black" }}>
          <p>Хлопок</p>
        </Link>
        <Link to="linen" style={{ textDecoration: "none", color: "black" }}>
          <p>Белье</p>
        </Link>
        <Link to="wedding" style={{ textDecoration: "none", color: "black" }}>
          <p>Свадебное белье</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
