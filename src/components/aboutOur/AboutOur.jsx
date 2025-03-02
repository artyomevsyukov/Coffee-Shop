import styles from "./AboutOur.module.scss"
import Picture from "../Picture/Picture"
import Title from "../Title/Title"

const AboutOur = ({ data, children, align = "center" }) => {
  const { img, title, country, price } = data
  console.log("data: ", data)
  return (
    <section className={styles.AboutOur}>
      <div className={styles.AboutOur__left}>
        <Picture
          img={img}
          alt="Девушка пьет кофе"
          className={styles.AboutOur__img}
        />
      </div>
      <div className={styles.AboutOur__right}>
        <Title title={title} />
        {country ? (
          <div className={styles.AboutOur__country}>Country: {country}</div>
        ) : null}
        <div
          className={`${styles.AboutOur__desc} ${
            align === "center" ? styles.AboutOur__center : ""
          }`}>
          {children}
        </div>
        {price ? (
          <div className={styles.AboutOur__price}>Price: {price}</div>
        ) : null}
      </div>
    </section>
  )
}

export default AboutOur
