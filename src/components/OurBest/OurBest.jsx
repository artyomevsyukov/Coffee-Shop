import CoffeeCard from "../CoffeeCard/CoffeeCard"
import styles from "./OurBest.module.scss"

const OurBest = () => {
  const data = [
    {
      id: 1,
      img: "1.jpg",
      title: "Solimo Coffee Beans 2 kg",
      price: "10.73$",
      link: "1",
    },
    {
      id: 2,
      img: "2.jpg",
      title: "Presto Coffee Beans 1 kg",
      price: "15.99$",
      link: "2",
    },
    {
      id: 3,
      img: "3.jpg",
      title: "AROMISTICO Coffee 1 kg",
      price: "6.99$",
      link: "3",
    },
  ]
  return (
    <section className={styles.OurBest}>
      <h2 className={`${styles.OurBest__title} title`}>OurBest</h2>
      <div className={styles.OurBest__list}>
        <CoffeeCard data={data} />
      </div>
    </section>
  )
}

export default OurBest
