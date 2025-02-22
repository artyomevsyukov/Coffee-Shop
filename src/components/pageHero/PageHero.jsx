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
        {firstChild} {/* Отобразится над заголовком */}
        <h1 className={styles.title}>{title}</h1>
        {restChildren} {/* Отобразится под заголовком */}
      </div>
    </div>
  )
}

export default PageHero
