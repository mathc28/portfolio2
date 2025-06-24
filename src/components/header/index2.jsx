import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "../../assets/logo-mc/ChatGPT Image 23 juin 2025 à 18_08_33.png";
import "./style2.css";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const illustrationRef = useRef(null);

  const arrowRef = useRef(null);

  const handleSlowScroll = (e) => {
    e.preventDefault();
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({
      top: document.querySelector("#services").offsetTop,
      behavior: "smooth",
    });
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 1000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power2.out",
      });

      gsap.from(subtitleRef.current, {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(illustrationRef.current, {
        duration: 1.5,
        opacity: 0,
        x: 100,
        rotate: 30,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.fromTo(
        arrowRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 10, repeat: -1, yoyo: true, duration: 1 }
      );
    });

    return () => ctx.revert(); // nettoyage GSAP
  }, []);

  return (
    <section className="hero">
      <nav className="nav">
        <div ref={illustrationRef} className="hero-image"> 
          <a href="#">
            <img src={Logo} alt="Logo MC" className="hover-image" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-main">
        <div className="hero-text">
          <h1 ref={titleRef}>Développeur Web Freelance</h1>
          <p ref={subtitleRef}>Créons ensemble des expériences web sur mesure.</p>
        </div>


      </div>

      <a
        ref={arrowRef}
        className="scroll-arrow"
        onClick={handleSlowScroll}
        role="button"
        aria-label="Aller vers Compétences"
      >
        &#x25BC;
      </a>
    </section>
  );
};

export default Hero;
