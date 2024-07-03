"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosArrowDown } from "react-icons/io";

const Upgrade = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full pt-0">
      <div className="bg-gradient-to-r from-fuchsia-300 via-purple-500 to-indigo-600 p-4 rounded-xl w-full">
        <div className="w-full text-center mb-6 text-sm text-white font-semibold tracking-tight">
          Upgrade to PRO to get <br />
          access all Features!
        </div>
        <Button
          variant={"default"}
          className="text-primary bg-white rounded-full w-full hover:bg-slate-100"
        >
          Get Pro Now!
        </Button>
      </div>
      <div className="w-full flex items-center justify-start p-2 gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <h3 className="text-sm font-semibold tracking-tighter">Evano</h3>
          <p className="text-xs -mt-1 tracking-tight text-slate-500">Product Manager</p>
        </div>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Upgrade;
