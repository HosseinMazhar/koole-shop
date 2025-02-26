import products, { ProductT } from "@/constants/products";
import { create } from "zustand";

type ProductStore = {
  products: ProductT[];
  addComment: (productId: number, newComment: { userName: string; text: string; score: number }) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: products,
  addComment: (productId, newComment) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? { ...product, comments: [newComment, ...product.comments] }
          : product
      ),
    })),
}));
