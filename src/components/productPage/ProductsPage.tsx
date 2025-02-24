"use client";

import { useProductStore } from "@/store/ProductStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useMemo, useState } from "react";
import ProductCard from "../common/ProductCard";

interface ProductPageProps {
  category: "all" | "pencilCase" | "schoolBag";
}

const ProductsPage: React.FC<ProductPageProps> = ({ category }) => {
  const { products } = useProductStore();
  const [sortOption, setSortOption] = useState<
    "all" | "mostFavourite" | "mostExpensive"
  >("all");

  const sortedProducts = useMemo(() => {
    const filteredProducts = [...products].filter((product) => {
      if (category === "all") {
        return true;
      } else {
        return product.type === category;
      }
    });
    const sorted = [...filteredProducts];

    if (sortOption === "mostExpensive") {
      sorted.sort(
        (a, b) =>
          Math.max(...b.variants.map((v) => v.price)) -
          Math.max(...a.variants.map((v) => v.price))
      );
    } else if (sortOption === "mostFavourite") {
      sorted.sort((a, b) => b.score - a.score);
    }

    return sorted;
  }, [category, products, sortOption]);

  return (
    <div className="w-full flex flex-col justify-center items-center p-10 gap-5">
      <nav className="w-full flex justify-between items-center mt-10 gap-3">
        <h1 className="text-2xl font-bold">
          {category === "all"
            ? "Products"
            : category === "schoolBag"
            ? "School Bags"
            : "Pencil Cases"}
        </h1>
        <Select
          value={sortOption}
          onValueChange={(e: "all" | "mostFavourite" | "mostExpensive") => {
            setSortOption(e);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sorting Categories</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="mostExpensive">Most Expensive</SelectItem>
              <SelectItem value="mostFavourite">Favourites</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </nav>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {sortedProducts.map((product) => (
          <div className="w-full" key={product.id}>
            <ProductCard
              image={product.images[0]}
              title={product.title}
              price={120}
              score={product.score}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
