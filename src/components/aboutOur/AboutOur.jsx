import styles from "./AboutOur.module.scss"
import beensLogo from "../../assets/beansLogo.svg"

const AboutOur = () => {
  return (
    <section className={styles.AboutOur}>
      <h2 className={styles.AboutOur__title}>About Our Beans</h2>
      <img src={beensLogo} className={styles.AboutUs__logo} alt="beens Logo" />
      <p className={styles.AboutOur__desc}>
        Now residence dashwoods she excellent you. Shade being under his bed
        her, Much read on as draw. Blessing for ignorant exercise any yourself
        unpacked. Pleasant horrible but confined day end marriage. Eagerness
        furniture set preserved far recommend. Did even but nor are most gave
        hope. Secure active living depend son repair day ladies now.
      </p>
    </section>
  )
}

export default AboutOur
