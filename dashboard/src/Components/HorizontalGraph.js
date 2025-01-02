import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {
      position: "bottom",
    },

    title: {
      display: true,
      text: "Statistics",
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: false, // Ensure all labels are shown
        maxRotation: 45, // Rotate labels for better fit
        minRotation: 0,
      },
    },
    y: {
      ticks: {
        minRotation:45,
      }
    }
  }
}

export function HorizontalGraph({ data }) {
	return <Bar options={options} data={data} />;
}
