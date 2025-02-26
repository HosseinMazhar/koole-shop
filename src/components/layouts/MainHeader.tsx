"use client";

import { Menu, Search, ShoppingCart } from "lucide-react";
import ModeToggle from "../toggles/ModeToggle";
import { Button } from "../ui/button";
import NotifPulse from "../common/NotifPulse";
import { useShoppingCardStore } from "@/store/useShoppingCardStore";
import { useRouter } from "next/navigation";

export default function MainHeader() {
  const { shoppingCards } = useShoppingCardStore();
  const router = useRouter();
  
  return (
    <nav className="w-full h-[80px] bg-neutral-100 dark:bg-neutral-900 flex justify-between items-center px-5 border-b border-neutral-200 dark:border-neutral-800 shadow-lg sticky top-0 z-[1000]">
      <div className="flex gap-2">
        <Button variant="secondary" size={"icon"}>
          <Menu />
        </Button>
        <Button variant="secondary" size={"icon"} className="relative" onClick={() => router.push('/shoppingCards')}>
          {shoppingCards.length ? <NotifPulse /> : <></>}
          <ShoppingCart />
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" size={"icon"}>
          <Search />
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
