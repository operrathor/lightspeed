import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Today",
    },
  },
};

const labels = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"];

export const data = {
  labels,
  datasets: [
    {
      label: "Area 1",
      data: [0.2, 0.1, 0.1, 0.3, 0.4, 0.9, 1.4],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Area 2",
      data: [0.1, 0.1, 0.0, 0.1, 0.3, 1.0, 1.1],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Consumption() {
  return <Line options={options} data={data} />;
}
