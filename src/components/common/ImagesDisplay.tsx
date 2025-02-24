"use client";

import Image from "next/image";
import { useState } from "react";

interface ImagesDisplayProps {
  images: string[];
}

const ImagesDisplay: React.FC<ImagesDisplayProps> = ({ images }) => {
  const [displayingImageUrl, setDisplayingImageUrl] = useState(images[0]);
  return (
    <div className="w-[300px] flex flex-col justify-center items-center gap-2">
      <div className="w-[300px] aspect-square flex flex-col justify-start items-center relative">
        <Image
          src={displayingImageUrl}
          alt="product image"
          layout="fill"
          objectFit="contain"
          className="border relative"
        />
      </div>
      <div className="w-full flex-wrap flex justify-start items-center gap-1 relative">
        {images.map((image, index) => {
          return (
            <div className="w-[60px]" key={index}>
              <Image
                width={60}
                height={60}
                src={image}
                alt="productImage"
                className={`cursor-pointer ${
                  image !== displayingImageUrl && "opacity-60"
                }`}
                onClick={() => setDisplayingImageUrl(image)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesDisplay;
