import products, { ProductT } from "@/constants/products";
import { create } from "zustand";

type ProductStore = {
  products: ProductT[];
};

export const useProductStore = create<ProductStore>(() => ({
  products: products
}));
