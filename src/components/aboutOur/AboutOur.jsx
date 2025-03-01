import styles from "./AboutOur.module.scss"
// import beensLogo from "../../assets/beansLogo.svg"
import Picture from "../Picture/Picture"
import Title from "../Title/Title"

// import img from "../../assets/AboutOurBeansImg.jpg"

const AboutOur = ({ img, title, children }) => {
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
        {/* <h2 className={`${styles.AboutOur__title} title`}>{title}</h2>
        <img
          src={beensLogo}
          className={styles.AboutOur__logo}
          alt="beens Logo"
        /> */}
        <Title title={title} />
        <div className={styles.AboutOur__desc}>{children}</div>
      </div>
    </section>
  )
}

export default AboutOur
