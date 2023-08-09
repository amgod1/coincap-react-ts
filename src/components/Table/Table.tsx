import styles from "./Table.module.scss"

const Table = () => {
  return (
    <table className={styles.table}>
      <thead className={styles["table__head"]}>
        <tr>
          <td>Title</td>
          <td>Price</td>
          <td>Change (24Hr)</td>
          <td>Add</td>
        </tr>
      </thead>
      <tbody className={styles["table__body"]}>
        <tr>
          <td>Bitcoin</td>
          <td>20b</td>
          <td>1%</td>
          <td>button</td>
        </tr>
        <tr>
          <td>Bitcoin</td>
          <td>20b</td>
          <td>1%</td>
          <td>button</td>
        </tr>
        <tr>
          <td>Bitcoin</td>
          <td>20b</td>
          <td>1%</td>
          <td>button</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
