"use client"
import { carousel } from "@/static";
import { useState, useEffect, useMemo } from "react";
import { CarouselProps, IndicatorProps } from "@/types";

const Carousel = () => {
  const [ images ] = useState(carousel);
  const [ index, setIndex ] = useState(0);

  // Checking last index
  useEffect(() => {
    const lastIndex = images.length - 1;

    if(index < 0){
        setIndex(lastIndex);
    }

    if(index > lastIndex){
        setIndex(0);
    };
  }, [index, carousel]);

  // Carousel Loop
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((last) => {
        const result = (last + 1) & images.length - 1;
        return result;
      })
    }, 5000);
    return () => {
      clearInterval(slider);
    }
  }, [index]);

  // Render carousel
  const renderCarousel = useMemo(() => {
    return images ? images.map((data, i) => {
      let position = 'next-slide';

      if(i === index){
          position = "active-slide";
      }

      if(i === index - 1 || (index === 0 && i === images.length - 1)){
          position = 'last-slide';
      }

      return <CarouselItem src={data.image} key={i} index={i} position={position} />
    }) : null
  }, [index, carousel]);

  return (
    <>  
      <div className="carousel">
        {renderCarousel}
        <Indicator pages={images} index={index} setIndex={setIndex} />
      </div>
    </>
  )
};

// Carousel Item
const CarouselItem = ({src, index, position}: CarouselProps) => {
  return <img src={src} className={`carousel-item ${position}`} alt={`carousel-${index}`} />
};

// Carousel Indicator
const Indicator = ({pages, index, setIndex}: IndicatorProps) => {
  const handleChangeIndex = (i: number) => {
    setIndex(i);
  };

  return (
    <div className="indicator">
      {
        pages.map((_, i) => {
          const isActivePage = i === index;

          const indicatorStyle = {
            width: isActivePage ? "100px" : "40px",
            backgroundColor: isActivePage ? "#CFB37C" : "#F8F8F8"
          };
          return <button key={i} style={indicatorStyle} onClick={() => handleChangeIndex(i)}></button>
        })
      }
    </div>
  )
};

export default Carousel;