"use client";

import React from "react";
import { data } from '@/constants';

import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";

const Bargraph = () => {
  const pageData = data;
  return (
    <>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            barSize={10}
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            barSize={10}
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />{" "}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Bargraph;
