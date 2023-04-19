import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
import "./VideoFooter.css";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img src="https://static.thenounproject.com/png/934821-200.png" alt="video footer" className="videoFooter__record" />
    </div>
  );
};

export default VideoFooter;
