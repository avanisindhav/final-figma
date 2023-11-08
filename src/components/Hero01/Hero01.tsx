import React from "react";
import "./Hero01.scss";

const Hero01 = () => {
  return (
    <div className="container hero_01">
      <div className="hero_01_content">
        <h4>SUBTITLE</h4>
        <h1>Product is an object made available for consumer use</h1>
        <p>
          Description is the pattern of narrative development that aims to make
          vivid a place, object, character, or group.
        </p>
      </div>
      <div className="hero_01_img_wrapper">
        <div>
          <img src="asserts/images/white/Hero01Banner.png" alt="hero page " />
          <div className="arrow left_arrow"></div>
          <div className="arrow right_arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero01;
