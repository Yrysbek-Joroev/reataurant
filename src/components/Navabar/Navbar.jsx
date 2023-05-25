import React from "react";
import "./Navbar.css";
import NearMeIcon from "@mui/icons-material/NearMe";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HttpsIcon from "@mui/icons-material/Https";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="nav-top">
          <p>8 800 77 500 77</p>
          <div style={{ display: "flex" }}>
            <NearMeIcon />
            <p>Регион: Бишкек</p>
          </div>
          <div>
            <h1>INCANTO</h1>
            <p>ITALY</p>
          </div>
          <div style={{ display: "flex gap: 10px" }}>
            <PlaceIcon />
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />
            <HttpsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
