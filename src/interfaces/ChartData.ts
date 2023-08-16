export default interface ChartData {
  labels: number[]
  datasets: {
    label: string
    data: string[]
    borderColor: string
    backgroundColor: string
  }[]
}
