import React from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h1>You are in {roomId} room</h1>
      <div className="chat_header">
        <div className="chat_channelName">
          <strong>#general</strong>
          <StarBorderOutlinedIcon />
        </div>

        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
