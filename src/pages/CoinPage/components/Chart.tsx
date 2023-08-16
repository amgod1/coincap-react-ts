import { FC } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"
import ChartProps from "./Chart.interface"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const Chart: FC<ChartProps> = ({ data }) => {
  return data && <Line data={data} />
}

export default Chart
