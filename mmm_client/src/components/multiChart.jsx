import React from "react";
import { Bar } from "react-chartjs-2";

const MultiChart = () => {
  const barChartData = {
    labels: ["October", "November", "December"],
    datasets: [
      {
        data: [8137119, 9431691, 10266674],
        label: "Infected People",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true,
      },
      {
        data: [1216410, 1371390, 1477380],
        label: "Deaths People",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
      },
    ],
  };

  const barChart = (
    <Bar
      type="bar"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 15,
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top", //Position of the legend.
        },
      }}
      data={barChartData}
    />
  );
  return barChart;
};

export default MultiChart;
