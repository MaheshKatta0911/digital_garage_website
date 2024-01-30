import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

function BarChart() {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "First Dataset",
        data: [490, 300, 45, 60, 375, 390, 250, 35, 4, 90, 23, 121],
        backgroundColor: 'yellow',
        borderColor: 'green',
        tension: 0.4,
        fill: true,
        pointStyle: 'star',
        pointBorderColor: 'green',
        pointBackgroundColor: '#fff',
        showLine: false
      }
    ]
  });

  return (
    <div className="bar-chart-container">
      <h1><u>Monthly Progress :</u></h1>
      <Line data={data} />
    </div>
  );
}

export default BarChart;
