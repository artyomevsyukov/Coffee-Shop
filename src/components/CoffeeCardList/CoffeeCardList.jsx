import styles from "./CoffeeCardList.module.scss"
import useCoffeeData from "../../hooks/useCoffeeData"
import CoffeeCard from "../CoffeeCard/CoffeeCard"

const CoffeeCardList = () => {
  const { data, loading, error, refetch } = useCoffeeData()

  if (loading) return <div>Loading...</div>
  if (error)
    return (
      <div>
        <div>Error: {error}</div>
        <button onClick={refetch}>Try Again</button>
      </div>
    )
  if (!data || data.length === 0) return <div>Нет данных</div>

  console.log("coffeeCard: ", data)
  return (
    <section className={styles.coffeeCardList}>
      {/* <button
        onClick={refetch}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid blue",
        }}>
        Try Again
      </button> */}

      <CoffeeCard data={data} />
    </section>
  )
}

export default CoffeeCardList
