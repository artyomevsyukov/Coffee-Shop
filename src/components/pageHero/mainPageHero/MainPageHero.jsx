import { Link } from "react-router-dom"
import AppHeader from "../../appHeader/AppHeader"
import beensLogoWhite from "../../../assets/beans-logo-white.svg"

import styles from "./mainPageHero.module.scss"

const MainPageHero = () => {
  return (
    <section className="mainPageHero">
      <AppHeader />
      <h1 className={styles.mainPageHero__title}>
        Everything You Love About Coffee
      </h1>
      <h2>
        We makes every day full of energy and taste <br />
        Want to try our beans?
      </h2>
      <Link to="more">
        <button className={styles.mainPageHero__button}>More</button>
      </Link>
      <img
        src={beensLogoWhite}
        className={styles.footer__logo}
        alt="beens Logo"
      />

      <div>MainPageHero</div>
    </section>
  )
}

export default MainPageHero
