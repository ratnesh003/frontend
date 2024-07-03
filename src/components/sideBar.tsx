"use client";

import React from "react";
import { TbSettings2 } from "react-icons/tb";
import { navitems } from "@/constants";
import NavItems from "@/components/navitems";
import { usePathname } from "next/navigation";
import Upgrade from "@/components/upgrade";

const SideBar = () => {
  const path = usePathname();
  return (
    <aside className="fixed left-0 bg-white h-screen w-60 flex flex-col items-center justify-start">
      <h1 className="p-4 flex items-center justify-center w-full text-xl font-bold gap-3">
        {" "}
        <TbSettings2 size={30} /> API Dashboard
      </h1>
      <nav className="flex-grow w-full p-4">
        <ul>
          {
            navitems.map((items)=>(
              <NavItems 
                key={items.herf}
                title={items.title}
                icon={items.icon}
                herf={items.herf}
                isActive={path == items.herf}
              />
            ))
          }
        </ul>
      </nav>
      <Upgrade />
    </aside>
  );
};

export default SideBar;
