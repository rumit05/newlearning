// components/Banner.js
import React, { useState, useEffect } from 'react';
import './css/Banner.css';
import bg1 from '../assets/italy-book.png';
import bg2 from '../assets/italy-book-two.png';

const slides = [
  { image: bg1 },
  { image: bg2 }
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner">
      <div
        className="banner-background"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      ></div>

      <button className="nav-button left" onClick={prevSlide}>&#10094;</button>
      <button className="nav-button right" onClick={nextSlide}>&#10095;</button>
    </section>
  );
}
