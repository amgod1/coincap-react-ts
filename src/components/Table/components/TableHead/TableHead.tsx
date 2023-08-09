import styles from "../../Table.module.scss"

const TableHeadInfo = [
  { id: 0, name: "Rank" },
  { id: 1, name: "Title" },
  { id: 2, name: "Price" },
  { id: 3, name: "Change" },
  { id: 4, name: "ADD" },
]

const TableHead = () => {
  return (
    <thead className={styles["table__head"]}>
      <tr>
        {TableHeadInfo.map((tableData) => (
          <td key={tableData.id}>{tableData.name}</td>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
