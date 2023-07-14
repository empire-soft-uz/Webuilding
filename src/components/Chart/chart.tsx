import React, { PureComponent, useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./chart.module.css";
const data = [
  {
    name: "avg21",
    uv: 4000,
    pv: 0,
    amt: 2400,
  },
  {
    name: "sen21",
    uv: 3000,
    pv: 7500,
    amt: 2210,
  },
  {
    name: "okt21",
    uv: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    name: "noy21",
    uv: 2780,
    pv: 8908,
    amt: 2000,
  },
  {
    name: "dek21",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "yan21",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const Chart = () => {
  let width = 640;
  const [width2, setWidth2] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth2 = window.innerWidth;
      setWidth2(newWidth2);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  if (width2 > 1200) {
    width = width2 * 0.76 - 355;
  } else {
    width = width2 * 0.94 - 40;
  }

  console.log("width", width);

  return (
    <LineChart width={width} height={270} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
export default Chart;
