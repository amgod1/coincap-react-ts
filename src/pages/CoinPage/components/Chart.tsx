import { FC, useEffect, useState } from "react"
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
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const style = {
    width: windowSize.width * 0.75,
    height: (windowSize.width * 0.75) / 2,
  }

  return (
    data && (
      <div style={style}>
        <Line data={data} />
      </div>
    )
  )
}

export default Chart
