"use client";

import { Menu, Search, ShoppingCart } from "lucide-react";
import ModeToggle from "../toggles/ModeToggle";
import { Button } from "../ui/button";
import NotifPulse from "../common/NotifPulse";
import { useShoppingCardStore } from "@/store/useShoppingCardStore";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/useProductStore";
import { ProductT } from "@/constants/products";
import Link from "next/link";

export default function MainHeader() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<ProductT[]>([]);
  const { products } = useProductStore();
  const { shoppingCards } = useShoppingCardStore();
  const router = useRouter();

  console.log(searchResult);

  useEffect(() => {
    if (search) {
      setSearchResult(
        products.filter((product) =>
          product.title.toLowerCase().includes(search)
        )
      );
    } else {
      setSearchResult([]);
    }
  }, [search]);

  return (
    <nav className="w-full h-[80px] bg-neutral-100 dark:bg-neutral-900 flex justify-between items-center px-5 border-b border-neutral-200 dark:border-neutral-800 shadow-lg sticky top-0 z-[1000]">
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size={"icon"}>
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative z-[1100]" align="end">
            <DropdownMenuItem onClick={() => router.push("/products")}>
              Products
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/schoolBags")}>
              School Bags
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/pencilCases")}>
              PencilCases
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="secondary"
          size={"icon"}
          className="relative"
          onClick={() => router.push("/shoppingCards")}
        >
          {shoppingCards.length ? <NotifPulse /> : <></>}
          <ShoppingCart />
        </Button>
      </div>
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size={"icon"}>
              <Search />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Search Product</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-2 w-full">
              <Input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="search something by name"
                className="w-full"
              />
              <div className="w-full max-h-[300px] overflow-y-scroll flex flex-col justify-center items-center gap-2">
                {searchResult.map((result) => (
                  <Link
                    href={`/${result.type}s/${result.id}`}
                    key={result.id}
                    className="w-full flex justify-start items-center"
                  >
                    {result.title}
                  </Link>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <ModeToggle />
      </div>
    </nav>
  );
}
