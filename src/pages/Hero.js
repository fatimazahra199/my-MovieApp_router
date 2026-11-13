import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="heroBanner">
      {/* Background picture (dimmed + blended with CSS in App.css) */}
      <div className="backdrop-img">
        <img src="https://c4.wallpaperflare.com/wallpaper/585/724/43/movies-the-lord-of-the-rings-the-lord-of-the-rings-the-return-of-the-king-frodo-baggins-wallpaper-preview.jpg" />
      </div>

      {/* Dark gradient at the bottom so the banner melts into the page */}
      <div className="opacity-layer"></div>

        {/* Text on top of the picture */}
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
