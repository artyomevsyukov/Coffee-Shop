import styles from "./Divider.module.scss"

const Divider = ({ className = "" }) => {
  return <hr className={`${styles.divider} ${className}`} />
}

export default Divider
