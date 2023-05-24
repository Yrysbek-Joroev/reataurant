import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["Слайд 1", "Слайд 2", "Слайд 3"];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div>
      <h3>{slides[currentSlide]}</h3>
      <button onClick={prevSlide}>Предыдущий слайд</button>
      <button onClick={nextSlide}>Следующий слайд</button>
    </div>
  );
};

export default Carousel;
