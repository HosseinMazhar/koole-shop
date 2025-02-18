"use client";

import { Search } from "lucide-react";
import ModeToggle from "../toggles/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function MainNavbar() {
  return (
    <nav className="w-full h-[80px] bg-neutral-100 dark:bg-neutral-900 flex justify-between items-center px-5 border-b border-neutral-200 dark:border-neutral-800 shadow-lg">
      <div className="flex gap-2">
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>HM</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary">
          <Search /> Search
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
