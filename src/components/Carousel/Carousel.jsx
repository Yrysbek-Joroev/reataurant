import React, { useState } from "react";
import "./Carousel.css";
import next from "../images/next.svg";
import prev from "../images/prev.svg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://incanto.eu/upload/webp/iblock/f20/xdsqpfn466z7y7fmdgnqqvxqlw2q1c3cu.webp.pagespeed.ic.undnFH7WbR.webp",
    "https://incanto.eu/upload/webp/iblock/5a6/x4a6wbjncdk7qe7lgz10nltu6fuz0fb32.webp.pagespeed.ic.phsB1PsAhb.webp",
    "https://incanto.eu/upload/webp/iblock/889/x1setjomxu61nuni33395r04krxq3x46n.webp.pagespeed.ic.R69drrd65d.webp",
    "https://incanto.eu/upload/webp/iblock/55b/xwdmgh6488owb64sw7k96qx1cj5hat54p.webp.pagespeed.ic.-Ox9fjC_mR.webp",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slider">
      <img src={slides[currentSlide]} alt="slide" width="100%" />
      <button className="prevSide" onClick={prevSlide}>
        <img src={prev} alt="" width="40px" />
      </button>
      <button className="nextSide" onClick={nextSlide}>
        <img src={next} alt="" width="40px" />
      </button>
    </div>
  );
};

export default Carousel;
