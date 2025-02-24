import { Link } from "react-router-dom"
import styles from "./MainPage.module.scss"

import AppHeader from "../appHeader/AppHeader"
import PageHero from "../pageHero/PageHero"

import beensLogoWhite from "../../assets/beansLogoWhite.svg"
import AboutUs from "../aboutUs/AboutUs"

const MainPage = () => {
  return (
    <div className={styles.mainPageHero}>
      <PageHero
        title="Everything You Love About Coffee"
        backgroundImage="Main-bg.jpg"
        height="640px"
        marginTop="110px">
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

        <Link to="more" className={styles.mainPageHero__button}>
          More
        </Link>
        {/* <button
          className={styles.mainPageHero__button}
          onClick={() => navigation.navigate("/more")}>
          More
        </button> */}
      </PageHero>
      <AboutUs />
    </div>
  )
}

export default MainPage
