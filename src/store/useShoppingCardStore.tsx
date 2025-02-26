import { create } from "zustand";

type ShoppingCard = {
  id: number;
  title: string;
  price: number;
  count: number;
  image: string;
  color: string;
  size: string;
};

type ShoppingCardStore = {
  shoppingCards: ShoppingCard[];
  addCard: (
    productId: number,
    productTitle: string,
    productPrice: number,
    productImage: string,
    productColor: string,
    productSize: string
  ) => void;
  removeCard: (
    productId: number,
    productPrice: number,
    productColor: string,
    productSize: string
  ) => void;
};

export const useShoppingCardStore = create<ShoppingCardStore>((set) => ({
  shoppingCards: [],

  addCard: (productId, productTitle, productPrice, productImage, productColor, productSize) =>
    set((state) => {
      const existingCard = state.shoppingCards.find(
        (card) =>
          card.id === productId &&
          card.price === productPrice &&
          card.color === productColor &&
          card.size === productSize
      );

      if (existingCard) {
        return {
          shoppingCards: state.shoppingCards.map((card) =>
            card.id === productId &&
            card.price === productPrice &&
            card.color === productColor &&
            card.size === productSize
              ? { ...card, count: card.count + 1 }
              : card
          ),
        };
      } else {
        return {
          shoppingCards: [
            ...state.shoppingCards,
            {
              id: productId,
              title: productTitle,
              price: productPrice,
              color: productColor,
              size: productSize,
              image: productImage,
              count: 1,
            },
          ],
        };
      }
    }),

  removeCard: (productId, productPrice, productColor, productSize) =>
    set((state) => {
      return {
        shoppingCards: state.shoppingCards
          .map((card) =>
            card.id === productId &&
            card.price === productPrice &&
            card.color === productColor &&
            card.size === productSize
              ? { ...card, count: card.count - 1 }
              : card
          )
          .filter((card) => card.count > 0),
      };
    }),
}));
