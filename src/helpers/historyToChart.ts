import moment from "moment"
import ChartData from "../interfaces/ChartData"
import History from "../interfaces/History.interface"

export const historyToChart = (history: History[]): ChartData => ({
  labels: history.map((dot) =>
    moment.unix(dot.time / 1000).format("MM-DD-YYYY")
  ),
  datasets: [
    {
      label: "History over the past year:",
      data: history.map((dot) => dot.priceUsd),
      borderColor: "rgb(0, 152, 121)",
      backgroundColor: "rgba(0, 152, 121, 0.5)",
    },
  ],
})
