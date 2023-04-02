import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <img src="https://c4.wallpaperflare.com/wallpaper/585/724/43/movies-the-lord-of-the-rings-the-lord-of-the-rings-the-return-of-the-king-frodo-baggins-wallpaper-preview.jpg" />
      </div>

      <div className="opacity-layer"></div>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
        </div>
    </div>
  );
};

export default Hero;
