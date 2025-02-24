import React from "react"
import styles from "./PageHero.module.scss"

const PageHero = ({
  title,
  backgroundImage,
  height = "260px",
  className = "",
  marginTop = "60px",
  children,
}) => {
  const heroStyle = {
    height: height,
    backgroundImage: `url(${backgroundImage})`,
  }

  const childrenArray = React.Children.toArray(children) // Преобразуем в массив
  const firstChild = childrenArray[0] // Первый элемент
  const restChildren = childrenArray.slice(1) // Остальные

  return (
    <div className={`${styles.pageHero} ${className}`} style={heroStyle}>
      <div className={styles.content}>
        {firstChild}
        <h1 className={styles.title} style={{ marginTop }}>
          {title}
        </h1>
        {restChildren}
      </div>
    </div>
  )
}

export default PageHero
