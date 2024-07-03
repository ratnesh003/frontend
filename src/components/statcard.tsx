import React from "react";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface itemProps {
  title: String;
  data: Number;
  icon: IconType;
  color: String;
}

const StatCard = ({ title, icon: Icon, data, color }: itemProps) => {
  const backgroundColorClass = `bg-${color}-200`;

  return (
    <div className="w-full flex justify-start items-start">
      <div className={cn("p-4 rounded-full ", backgroundColorClass)}>
        <Icon size={30} color={color.toString()} />
      </div>

      <div className="pl-4">
        <div className="capitalize text-xs tracking-tighter text-slate-400">{title}</div>
      <div className="text-2xl tracking-tighter font-bold">
        {data.toString()}
      </div>
      </div>
    </div>
  );
};

export default StatCard;
