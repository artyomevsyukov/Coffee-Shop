import React from "react"
import styles from "./appHeader.module.scss"
import { Link, NavLink } from "react-router-dom"

import SvgLogo from "../icons/SvgLogo"

// eslint-disable-next-line react/display-name
const AppHeader = React.memo(({ color = "black" }) => {
  const linkStyle = {
    color: color,
  }

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        <SvgLogo color={color} />
      </Link>

      <nav className={styles.header__nav}>
        <NavLink to="/" style={linkStyle} className={styles.header__link}>
          Coffee house
        </NavLink>
        <NavLink
          to="/OurCoffee"
          style={linkStyle}
          className={styles.header__link}>
          Our coffee
        </NavLink>
        <NavLink
          to="/ForYourPleasure"
          style={linkStyle}
          className={styles.header__link}>
          For your pleasure
        </NavLink>
      </nav>
    </div>
  )
})

export default AppHeader
