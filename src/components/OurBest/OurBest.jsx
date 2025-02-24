import styles from "./OurBest.module.scss"

const OurBest = ({ className = "" }) => {
  return <section className={`${styles.OurBest} ${className}`}></section>
}

export default OurBest
