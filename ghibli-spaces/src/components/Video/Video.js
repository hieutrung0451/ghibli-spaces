import "./Video.css";
import { useContext, useState } from "react";
import train from "../../assets/videos/train-video.mp4";
import warm from "../../assets/videos/warm-video.mp4";
import study from "../../assets/videos/study-video.mp4";
import lonley from "../../assets/videos/lonley-video.mp4";
import nature from "../../assets/videos/nature-video.mp4";
import fly from "../../assets/videos/fly-video.mp4";
import ColorContext from "../../contexts/ColorContext";

const Video = () => {
  const [video, setVideo] = useState(lonley);
  const color = useContext(ColorContext);

  const showVideo = (e) => {
    setVideo(e.target.value);
  };

  return (
    <div className="video-player">
      <video src={video} autoPlay loop muted></video>
      <div className="videos-bar" style={{ backgroundColor: color.color }}>
        <button
          onClick={showVideo}
          value={fly}
          style={{ backgroundColor: color.color }}
        >
          1
        </button>
        <button
          onClick={showVideo}
          value={study}
          style={{ backgroundColor: color.color }}
        >
          2
        </button>
        <button
          onClick={showVideo}
          value={lonley}
          style={{ backgroundColor: color.color }}
        >
          3
        </button>
        <button
          onClick={showVideo}
          value={nature}
          style={{ backgroundColor: color.color }}
        >
          4
        </button>
        <button
          onClick={showVideo}
          value={warm}
          style={{ backgroundColor: color.color }}
        >
          5
        </button>
        <button
          onClick={showVideo}
          value={train}
          style={{ backgroundColor: color.color }}
        >
          6
        </button>
      </div>
    </div>
  );
};

export default Video;
