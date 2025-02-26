"use client";

import { useShoppingCardStore } from "@/store/useShoppingCardStore";
import Image from "next/image";

export default function ShoppingCardsPage() {
  const { shoppingCards, addCard, removeCard } = useShoppingCardStore();
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5">
      <h1 className="text-xl lg:text-3xl font-bold">Shopping Cards</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {shoppingCards.map((card, index) => (
          <div className="w-full" key={index}>
            <div className="w-full flex flex-col justify-center items-center px-8 py-4 dark:bg-neutral-900 hover:dark:bg-neutral-800 bg-neutral-200 hover:bg-neutral-300 ho rounded-lg gap-2 cursor-pointer select-none">
              <div className="w-full max-w-[300px] aspect-square relative cursor-pointer">
                <Image
                  src={card.image}
                  alt="shopping card Image"
                  layout="fill"
                  objectFit="contain"
                  className="relative rounded-2xl cursor-pointer"
                />
              </div>
              <p className="w-full max-w-[300px] text-left font-bold cursor-pointer">
                {card.title}
              </p>
              <p className="w-full max-w-[300px] text-left font-bold cursor-pointer">
                size : {card.size}
              </p>
              <div className="w-full max-w-[300px] flex justify-start">
                <span
                  className="px-8 py-3 border"
                  style={{ backgroundColor: card.color }}
                ></span>
              </div>
              <p className="w-full max-w-[300px] text-right text-xl font-extrabold cursor-pointer">
                ${card.price}
              </p>
              <p className="w-full max-w-[300px] flex justify-end items-center gap-2">
                <button
                  className="px-3 aspect-square bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold"
                  onClick={() =>
                    removeCard(card.id, card.price, card.color, card.size)
                  }
                >
                  -
                </button>
                <span>{card.count}</span>
                <button
                  className="px-3 aspect-square bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold"
                  onClick={() =>
                    addCard(
                      card.id,
                      card.title,
                      card.price,
                      card.image,
                      card.color,
                      card.size
                    )
                  }
                >
                  +
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
