import React from 'react'

import {Chart as ChartJS} from "chart.js"
import { Line } from 'react-chartjs-2'


const chartData = {
  labels: [
    "July",
    "August",
    "September",
    "Octuber",
    "July",
    "August",
    "September",
    "Octuber",
  ],
  datasets: [
    {
        label: "Revenue",
        data: [201, 286]
    }
  ]
};

const TotalIncome = () => {
  return (
    <div>TotalIncome</div>
  )
}

export default TotalIncome