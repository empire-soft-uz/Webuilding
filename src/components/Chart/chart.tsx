import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from "./chart.module.css"
const data = [
    {
        name: 'avg21',
        uv: 4000,
        pv: 0,
        amt: 2400,
    },
    {
        name: 'sen21',
        uv: 3000,
        pv: 7500,
        amt: 2210,
    },
    {
        name: 'okt21',
        uv: 2000,
        pv: 4800,
        amt: 2290,
    },
    {
        name: 'noy21',
        uv: 2780,
        pv: 8908,
        amt: 2000,
    },
    {
        name: 'dek21',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'yan21',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
];

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;



const Chart = () => {

    let width = 640;

    if (screenWidth > 1300) {
        width = screenWidth * 0.76 - 355
    } else {
        width = screenWidth * 0.94 - 40
    }


    return (
        // <ResponsiveContainer width="100%" height="260px">
        <LineChart
            width={width}
            height={270}
            data={data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        // </ResponsiveContainer>
    )
}
export default Chart;
