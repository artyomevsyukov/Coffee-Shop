import styles from "./OurBest.module.scss"

const OurBest = ({ className = "" }) => {
  return (
    <section className={`${styles.OurBest} ${className}`}>
      <div>OurBest</div>
    </section>
  )
}

export default OurBest
