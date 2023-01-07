import React from "react";

const Media = () => {
  return (
    <div className="media">
      <iframe
        title="ghibli music"
        style={{ borderRadius: "12px", marginTop: "8px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7GTqMQDhOum?utm_source=generator&theme=0"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Media;
