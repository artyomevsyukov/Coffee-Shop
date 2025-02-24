import styles from "./CoffeeCard.module.scss"
import { Link } from "react-router-dom"
import useCoffeeData from "../../hooks/useCoffeeData"

const CoffeeCard = ({ className = "" }) => {
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
    <>
      <button
        onClick={refetch}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid blue",
        }}>
        Try Again
      </button>
      <Link to="/">
        <div className={`${styles.CoffeeCard} ${className}`}>
          {data.map((el) => (
            <div key={el.id}>
              <div>{el.title}</div>
              <img src={el.img} alt="coffee image" />
              <div>{el.desc}</div>
            </div>
          ))}
        </div>
      </Link>
    </>
  )
}

export default CoffeeCard
