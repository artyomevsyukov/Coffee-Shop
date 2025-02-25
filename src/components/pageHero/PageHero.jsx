import React from "react"
import styles from "./PageHero.module.scss"

const PageHero = ({
  title,
  backgroundImage, // Принимаем только базовый путь, без 2x/3x
  height = "260px",
  className = "",
  marginTop = "60px",
  children,
}) => {
  // Получаем расширение файла (например, "jpg" из "Main-bg.jpg")
  const fileExt = backgroundImage.split(".").pop()
  const fileBase = backgroundImage.replace(`.${fileExt}`, "") // Убираем расширение

  // Генерируем image-set автоматически
  const heroStyle = {
    height: height,
    // backgroundImage: `url(${backgroundImage})`,
    backgroundImage: `image-set(
      url(/${fileBase}.${fileExt}) 1x, 
      url(/${fileBase}@2x.${fileExt}) 2x,
      url(/${fileBase}@3x.${fileExt}) 3x
    )`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  const childrenArray = React.Children.toArray(children)
  const firstChild = childrenArray[0]
  const restChildren = childrenArray.slice(1)

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
