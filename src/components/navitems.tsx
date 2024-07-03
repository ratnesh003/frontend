"use client";

import React from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItemsProps {
  title: String;
  icon: IconType;
  herf: String;
  isActive: Boolean;
}

const NavItems = ({ title, icon: Icon, herf, isActive }: NavItemsProps) => {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(`${herf}`)}
      className={cn(
        "text-sm flex items-center justify-start gap-2 p-2 rounded-md cursor-pointer capitalize mb-2",
        isActive ? "text-white bg-indigo-600" : "text-black bg-white"
      )}
    >
      <Icon />
      {title}
    </li>
  );
};

export default NavItems;
