import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Clever programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Ritish jaiswal
          </h3>
        </div>

        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="threads" />
      <SidebarOption title="Youtube" />
    </div>
  );
}

export default Sidebar;
