import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import run from "../assets/sneak3i.png";
import run2 from "../assets/loaf5i.png";
import run3 from "../assets/loaf3i.png";

const slides = [
  {
    image: run,
    title: "Step Into Confidence",
    text: "Premium sneakers built for comfort and style",
    bg: "rgba(32,30,28,1)",
  },
  {
    image: run2,
    title: "New Season Drops",
    text: "Fresh arrivals made for every move",
    bg: "rgba(30,15,5,1)",
  },
  {
    image: run3,
    title: "Own Your Style",
    text: "Find the perfect pair that fits you",
    bg: "rgba(25,25,25,1)",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.hero} ${
            index === current ? styles.active : ""
          }`}
          style={{ background: slide.bg }}
        >
          <div className={styles.textSection}>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <button>Shop Now</button>
          </div>

          <div className={styles.imageSection}>
            <img src={slide.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;