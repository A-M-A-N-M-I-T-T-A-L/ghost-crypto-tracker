import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Graph = () => {
  const getRandomNumbers = () => {
    const dataPoints = [];
    let randomArrayLength = Number(15 + Math.floor(Math.random() * 11));
    for (let i = 0; i < randomArrayLength; ++i) {
      let randomPoint = Number(Math.floor(Math.random() * 101));
      dataPoints.push(randomPoint);
    }
    return dataPoints;
  };

  const data = {
    labels: [
    "9:00 AM",
      "9:30 AM",
      "10:30 AM",
      "10:30 AM",
      "11:30 AM",
      "11:30 AM",
      "12:30 AM",

      "12:30 AM",
      "13:30 AM",

      "13:30 AM",
      "14:30 AM",

      "14:30 AM",
      "15:30 AM",

      "15:30 AM",
    ],

    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: "red",
        borderColor: "#3773f5",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#3773f5",
        pointBackgroundColor: "#3773f5",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "blue",
        pointHoverBorderColor: "#3773e0",
        pointRadius: 1,
        pointHitRadius: 10,
        data: getRandomNumbers(),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} width={400} height={150} />
    </div>
  );
};

export default Graph;
