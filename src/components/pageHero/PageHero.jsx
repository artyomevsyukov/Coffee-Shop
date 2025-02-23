import React from "react"
import styles from "./PageHero.module.scss"

const PageHero = ({
  title,
  backgroundImage,
  height = "260px",
  backgroundPosition = "center",
  backgroundSize = "cover",
  className = "",
  children,
}) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: height,
    backgroundPosition: backgroundPosition,
    backgroundSize: backgroundSize,
  }

  const childrenArray = React.Children.toArray(children) // Преобразуем в массив
  const firstChild = childrenArray[0] // Первый элемент
  const restChildren = childrenArray.slice(1) // Остальные

  return (
    <div className={`${styles.pageHero} ${className}`} style={heroStyle}>
      <div className={styles.content}>
        {firstChild}
        <h1 className={styles.title}>{title}</h1>
        {restChildren}
      </div>
    </div>
  )
}

export default PageHero
