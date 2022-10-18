import React from "react";

const Media = () => {
  return (
    <div className="media">
      <iframe
        title="ghibli musics"
        style={{ borderRadius: "12px", marginTop: "8px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7GTqMQDhOum?utm_source=generator&theme=0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        width="100%"
        height={290}
        frameBorder={0}
      />
    </div>
  );
};

export default Media;
