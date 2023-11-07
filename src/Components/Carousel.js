import React, { useState, useEffect } from "react";
import "../Css/Carousel.css"

const Carousel = () => {
  const images = [
    "https://s3images.zee5.com/wp-content/uploads/2021/10/11-Image-10-784x441.jpg",
    "https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1380&t=st=1696499262~exp=1696499862~hmac=4d7c7cfb3aa80b248286a060738db98ed07ba505c137be0428488b97f91e484a",
    "https://img.freepik.com/free-vector/flat-diwali-sale-with-candle_52683-27177.jpg?w=826&t=st=1699193657~exp=1699194257~hmac=0aba3bc76dbe3663e999b46d4c8ca72499939ab05f51d5bad964cdecd3a07ca1",
    "https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg?w=826&t=st=1699193607~exp=1699194207~hmac=2676648cb956fc66becb607793fa36dc0529d8ae79f45eb874aca181375c2215",
    "https://img.freepik.com/free-vector/mega-sale-banner-blue-yellow-colors_1017-32176.jpg?w=996&t=st=1699193584~exp=1699194184~hmac=f131bcff60384c2fcc24db4dba31067289094d4d17017c2ab15134d7e04f1375",
    // Add more image URLs as needed
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Img ${index}`} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImage ? "activedot" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;