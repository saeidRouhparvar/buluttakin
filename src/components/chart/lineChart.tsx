import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
 
    legend: {
      display: false,
      labels:{
        boxHeight:3
      }
    },
  },
  stacked: false,
 
  scales: {

    x:{
        grid: {
            display: false,
          },
          ticks: {
            font: {
              family: "Roboto",
              size: 9,
            },
            color:'#101828',
          },
    },
    y: {
        grid:{
            height:1,
            border:'dash'
        },
        border: {
            display: false,
          },
          min:0,
          max:25,
        ticks: {
            stepSize:5,
            font: {
              family: "Roboto",
              size: 9,
            },
            color:'#101828',
          },
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: false,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [13, 4, 10, 8,9,14],
      borderColor: '#6941C6',
      yAxisID: 'y',
    },
    {
        label: '',
        data: [20,12,11,16,25],
      borderColor: '#101828',
      borderWidth:3
    },
  ],
};

export default function LineChart() {
  return <Line
  // @ts-ignore
  options={options} data={data}
  />;
}
