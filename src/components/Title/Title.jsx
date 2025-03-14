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

// const Title = ({ children }) => {
//   return (
//     <div className={styles.title}>
//       <h2 className={`${styles.title__title} title`}>{children}</h2>
//       <img src={beensLogo} className={styles.title__logo} alt="beens Logo" />
//     </div>
//   )
// }

export default Title
