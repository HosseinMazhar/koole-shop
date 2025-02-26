"use client";

import { ProductT } from "@/constants/products";
import { useProductStore } from "@/store/useProductStore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ImagesDisplay from "../common/ImagesDisplay";
import { Plus, ShoppingCart } from "lucide-react";
import FeedBack from "./FeedBack";
import { useShoppingCardStore } from "@/store/useShoppingCardStore";
import { toast } from "sonner";

export default function ProductsPageById() {
  const { id } = useParams();
  const { products } = useProductStore();
  const { addCard } = useShoppingCardStore();
  const foundedProduct: ProductT | undefined = products.find(
    (product) => product.id == Number(id)
  );
  const colors = foundedProduct
    ? [...new Set(foundedProduct.variants.map((v) => v.color))]
    : [];
  const sizes = foundedProduct
    ? [...new Set(foundedProduct.variants.map((v) => v.size))]
    : [];
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [price, setPrice] = useState<number | "">();

  useEffect(() => {
    if (foundedProduct) {
      const foundedVariant = foundedProduct.variants.find(
        (variant) =>
          variant.color === selectedColor && variant.size === selectedSize
      );
      if (foundedVariant?.price) {
        setPrice(foundedVariant.price);
      }
    }
  }, [foundedProduct, selectedColor, selectedSize]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center lg:items-start gap-2 lg:flex-row p-10">
        {foundedProduct && <ImagesDisplay images={foundedProduct.images} />}
        <div className="w-[300px] flex flex-col justify-center items-center lg:justify-start lg:items-start">
          {foundedProduct && (
            <div className="max-w-[300px] flex flex-col justify-center items-start py-5">
              <h1 className="text-xl font-bold">{foundedProduct.title}</h1>
              <h2 className="text mt-2">{foundedProduct.description}</h2>
            </div>
          )}
          {foundedProduct && (
            <div className="w-max-[300px] flex justify-start items-center mt-5">
              {colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className={`w-[60px] cursor-pointer h-[30px] border border-slate-100 ${
                      selectedColor !== color && "opacity-20"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  />
                );
              })}
            </div>
          )}
          {foundedProduct && (
            <div className="w-max-[300px] flex justify-start items-center mt-2">
              {sizes.map((size, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[60px] flex justify-center items-center cursor-pointer h-[30px] border border-slate-100 ${
                      selectedSize !== size && "opacity-20"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <p>{size}</p>
                  </div>
                );
              })}
            </div>
          )}
          {foundedProduct && (
            <div className="w-full flex justify-center lg:justify-end items-center gap-2 mt-3">
              <p className="text-lg font-bold text-right">
                ${price || foundedProduct.basePrice}
              </p>
              <button
                onClick={() => {
                  addCard(
                    foundedProduct.id,
                    foundedProduct.title,
                    price || foundedProduct.basePrice,
                    foundedProduct.images[0],
                    selectedColor,
                    selectedSize
                  );
                  toast.success(`${foundedProduct.title} has been added to your shopping cards`)
                }}
                className="flex justify-center items-center px-2 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg cursor-pointer"
              >
                <Plus size={20} />
                <ShoppingCart size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
      {foundedProduct && (
        <FeedBack id={foundedProduct.id} comments={foundedProduct.comments} />
      )}
    </div>
  );
}
