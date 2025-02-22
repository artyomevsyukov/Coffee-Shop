import AppHeader from "../appHeader/AppHeader"
import beensLogo from "../../assets/beansLogo.svg"

import styles from "./appFooter.module.scss"

const AppFooter = () => {
  return (
    <>
      <div className={styles.footer}>
        <AppHeader />
        <img src={beensLogo} className={styles.footer__logo} alt="beens Logo" />
      </div>
    </>
  )
}

export default AppFooter
