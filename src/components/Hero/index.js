import React, { useEffect, useRef } from "react";
import "./style.css";
import gsap, { Power2 } from "gsap";
import canImg from "../../assets/cans.png";

function Hero() {
    const canRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.from(canRef.current, {
            duration: 1,
            opacity: 0,
            y: -500,
        });
        gsap.from(titleRef.current, {
            duration: 1,
            opacity: 0,
            x: -800,
            ease: Power2.easeOut,
        });

    }, [])

  return (
    <div className="hero-container">
        <div className="hero-text" ref={titleRef}>
      <div className="hero-title">Fresher <br /> than <br /> fresh</div>
      <div className="hero-subtitle">yes, thats our slogan</div>
      </div>
      <div className="hero-img">
        <img ref={canRef} src={canImg} alt="can" className="hero-can" />
      </div>
    </div>
  );
}

export default Hero;
