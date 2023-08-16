export default interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: string[]
    borderColor: string
    backgroundColor: string
  }[]
}
