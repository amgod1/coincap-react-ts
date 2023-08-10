import { useCoinContext } from "../../context/CoinContext/CoinContext"
import styles from "./Pagination.module.scss"

const Pagination = () => {
  const {
    coinState,
    setFirstCurrentPage,
    setLastCurrentPage,
    setPrevCurrentPage,
    setNextCurrentPage,
  } = useCoinContext()

  return (
    coinState.showCoins.length && (
      <section className={styles.pagination}>
        <button
          onClick={setFirstCurrentPage}
          disabled={coinState.currentPage === 0}
          className={styles["pagination__button"]}
        >
          first
        </button>
        <button
          onClick={setPrevCurrentPage}
          disabled={coinState.currentPage === 0}
          className={styles["pagination__button"]}
        >
          prev
        </button>
        <h2>{coinState.currentPage + 1}</h2>
        <button
          onClick={setNextCurrentPage}
          disabled={coinState.currentPage === coinState.lastPage}
          className={styles["pagination__button"]}
        >
          next
        </button>
        <button
          onClick={setLastCurrentPage}
          disabled={coinState.currentPage === coinState.lastPage}
          className={styles["pagination__button"]}
        >
          last
        </button>
      </section>
    )
  )
}

export default Pagination
