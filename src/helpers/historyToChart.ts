import ChartData from "../interfaces/ChartData"
import History from "../interfaces/History.interface"

export const historyToChart = (history: History[]): ChartData => ({
  labels: history.map((dot) => dot.time),
  datasets: [
    {
      label: "Dataset 1",
      data: history.map((dot) => dot.priceUsd),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
})
