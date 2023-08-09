import styles from "./Table.module.scss"
import TableBody from "./components/TableBody/TableBody"
import TableHead from "./components/TableHead/TableHead"

const Table = () => {
  return (
    <table className={styles.table}>
      <TableHead />
      <TableBody />
    </table>
  )
}

export default Table
