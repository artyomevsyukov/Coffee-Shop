import styles from "./CoffeeCard.module.scss"
import { Link } from "react-router-dom"
import { srcSet, srcSetWebp } from "../../utils/srcSet"

const CoffeeCard = ({ data }) => {
  return (
    <>
      {data.map((el, i) => {
        if (i > 8) return
        return (
          <li key={el.id}>
            <Link
              to={`/OurCoffee/${el.id}`}
              className={styles.coffeeCard__link}>
              <div className={styles.coffeeCard}>
                <picture>
                  <source srcSet={srcSetWebp(el.img)} type="image/webp" />
                  <img
                    src={el.img}
                    srcSet={srcSet(el.img)}
                    alt="coffee image"
                    className={styles.coffeeCard__img}
                  />
                </picture>
                <h3 className={styles.coffeeCard__title}>{el.title}</h3>
                <div className={styles.coffeeCard__country}>{el.country}</div>
                <div className={styles.coffeeCard__price}>{el.price}</div>
              </div>
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default CoffeeCard
