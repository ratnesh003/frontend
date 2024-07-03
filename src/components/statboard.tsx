"use client";

import { stats } from "@/constants";
import { Separator } from "@/components/ui/separator";
import React from "react";
import StatCard from "./statcard";

const Statboard = () => {
  return (
    <div className="flex gap-4 px-8 py-4 h-fit bg-white mx-16 rounded-xl">
      {stats.map((item, index) => (
        <div className="flex items-center justify-between w-full h-full" key={index}>
          <StatCard
            title={item.title}
            icon={item.icon}
            color={item.color}
            data={item.data}
          />
          {index < stats.length - 1 ? (
            <Separator
              orientation="vertical"
              className="h-[60px] bg-slate-300 mr-4"
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Statboard;
