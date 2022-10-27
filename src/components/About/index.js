import React, { useRef, useEffect } from "react";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutref = useRef();
  const aboutp = useRef()

  useEffect(() => {
    gsap.from(aboutref.current, {
      duration: 2,
      opacity: 0,
      y: 100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutref.current,
        start: "top 90%",
      },
    });
    
    gsap.from(aboutp.current, {
      duration: 1,
      opacity: 0,
      y: 400,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutp.current,
        start: "top 95%",
        toggleActions: 'restart none none restart'
      },
    });

  }, []);

  return (
    <div className="about-container" ref={aboutref}>
      <div className="about-title">About us</div>
      <div className="about-paragraph"  ref={aboutp}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam,
        iste eius quos, beatae ut corporis voluptatum minus repellendus sapiente
        doloremque facilis nam, cupiditate non pariatur nisi quaerat esse sint
        porro quam explicabo. Culpa, ipsam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consequuntur recusandae explicabo quis
        illo necessitatibus nesciunt!
      </div>
    </div>
  );
}

export default About;
