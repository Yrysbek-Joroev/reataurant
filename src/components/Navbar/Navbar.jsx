import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Navbar = () => {
  return (
    <div>
      <div
        className="nav-big"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div>
          <span>8 800 77 500 77</span>
        </div>
        <div>
          <NearMeIcon /> <span>Регион: Бишкек</span>
        </div>
        <div>
          <h1>INCANTO</h1>
          <span>ITALY</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
