import { Link } from "react-router-dom"

import AppHeader from "../appHeader/AppHeader"
import PageHero from "../pageHero/PageHero"

import beensLogoWhite from "../../assets/beansLogoWhite.svg"
import styles from "./MainPage.module.scss"

const MainPage = () => {
  return (
    <section className={styles.mainPageHero}>
      <PageHero
        title="Everything You Love About Coffee"
        backgroundImage="Main-bg.jpg"
        height="640px">
        <AppHeader color="white" />
        <img
          src={beensLogoWhite}
          className={styles.mainPageHero__logo}
          alt="beens Logo"
        />
        <p className={styles.mainPageHero__desc}>
          We makes every day full of energy and taste
        </p>
        <p className={styles.mainPageHero__desc}>Want to try our beans?</p>

        <button className={styles.mainPageHero__button}>
          <Link to="more">More </Link>
        </button>
      </PageHero>
    </section>
  )
}

export default MainPage
