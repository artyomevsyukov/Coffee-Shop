import styles from "./CoffeeCardList.module.scss"
// import useCoffeeData from "../../hooks/useCoffeeData"
import CoffeeCard from "../CoffeeCard/CoffeeCard"

const CoffeeCardList = ({ data, loading, error, refetch }) => {
  // const CoffeeCardList = ({ props }) => {
  //   const { data, loading, error, refetch } = props

  if (loading) return <div>Loading...</div>
  if (error)
    return (
      <div className={styles.coffeeCardList__error}>
        <div className={styles.coffeeCardList__errorMessage}>
          Error: Couldn't upload data {error}
        </div>
        <button onClick={refetch} className={styles.coffeeCardList__button}>
          Try Again
        </button>
      </div>
    )
  if (!data || data.length === 0)
    return (
      <div className={styles.coffeeCardList__notFound}>
        No such coffee was found.
      </div>
    )

  return (
    <>
      <div className={styles.coffeeCardList__container}>
        <CoffeeCard data={data} />
      </div>
    </>
  )
  // return (
  //   <section className={styles.coffeeCardList}>
  //     <button
  //       onClick={refetch}
  //       style={{
  //         display: "block",
  //         margin: "20px auto",
  //         padding: "20px",
  //         border: "1px solid blue",
  //       }}>
  //       Try Again
  //     </button>

  //     <CoffeeCard data={data} />
  //   </section>
  // )
}

export default CoffeeCardList
