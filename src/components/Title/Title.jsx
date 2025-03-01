import styles from "./Title.module.scss"

import beensLogo from "../../assets/beansLogo.svg"

const Title = ({ title }) => {
  return (
    <>
      <h2 className={`${styles.title__title} title`}>{title}</h2>
      <img src={beensLogo} className={styles.title__logo} alt="beens Logo" />
    </>
  )
}

export default Title
