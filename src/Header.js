import React from "react";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useStatevalue } from "./StateProvider";
function Header() {
  const [{ user }] = useStatevalue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          alt={user?.displayName}
          src={user?.photoUrl}
        />

        <AccessTimeIcon />
      </div>

      <div className="header_search">
        <SearchIcon />
        <input placeholder="search" type="text" />
      </div>

      <div className="header_right">
        <HelpOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
