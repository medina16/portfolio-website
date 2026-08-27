"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import ImageDot from "./imageDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  if (!images || images.length === 0) {
    return null;
  }

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length,
    );
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      goToNextImage();
    }, 4000); // Auto slide every 4 seconds
return () => clearTimeout(timeOut);
  }, [currentImage]);

  return (
    <div>
      <div className="relative overflow-hidden flex justify-center">
  <div className="bg-black w-full max-w-[725px] aspect-[725/360] rounded-lg border-light-border border-1 overflow-hidden">
    <div
      className="flex flex-row w-full h-full"
      style={{ transform: `translateX(${-100 * currentImage}%)`, transition: "transform 300ms ease-in-out" }}
    >
      {images.map((_, index) => (
        <div key={index} className="w-full h-full flex-shrink-0 relative">
          <Image
            className="object-cover"
            src={images[index].image.url}
            fill
            sizes="(max-width: 725px) 100vw, 725px"
            alt="pic"
          />
        </div>
      ))}
    </div>
  </div>
</div>
      <div className="pt-3 flex justify-center space-x-2 mt-3">
        {images.map((_, index) => (
          <ImageDot
            key={index}
            active={index === currentImage}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
