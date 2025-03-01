import styles from "./CoffeeCard.module.scss"
import { Link } from "react-router-dom"
import { srcSet, srcSetWebp } from "../../utils/srcSet"

const CoffeeCard = ({ data }) => {
  return (
    <>
      {data.map((el) => (
        <Link to={el.link} className={styles.coffeeCard__link} key={el.id}>
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
            <div className={styles.coffeeCard__title}>{el.title}</div>
            <div className={styles.coffeeCard__country}>{el.country}</div>
            <div className={styles.coffeeCard__price}>{el.price}</div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default CoffeeCard
