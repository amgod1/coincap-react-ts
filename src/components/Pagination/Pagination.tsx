import { useCoinContext } from "../../context/CoinContext/CoinContext"
import styles from "./Pagination.module.scss"

const Pagination = () => {
  const {
    state,
    setFirstCurrentPage,
    setLastCurrentPage,
    setPrevCurrentPage,
    setNextCurrentPage,
  } = useCoinContext()

  return (
    state.allCoins && (
      <section className={styles.pagination}>
        <button
          onClick={setFirstCurrentPage}
          disabled={state.currentPage === 0}
          className={styles["pagination__button"]}
        >
          first
        </button>
        <button
          onClick={setPrevCurrentPage}
          disabled={state.currentPage === 0}
          className={styles["pagination__button"]}
        >
          prev
        </button>
        <h2>{state.currentPage + 1}</h2>
        <button
          onClick={setNextCurrentPage}
          disabled={state.currentPage === state.lastPage}
          className={styles["pagination__button"]}
        >
          next
        </button>
        <button
          onClick={setLastCurrentPage}
          disabled={state.currentPage === state.lastPage}
          className={styles["pagination__button"]}
        >
          last
        </button>
      </section>
    )
  )
}

export default Pagination
