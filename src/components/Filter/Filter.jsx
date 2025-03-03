import { useState } from "react"
import styles from "./Filter.module.scss"

const Filter = ({ onFilterChange }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    onFilterChange({ type: "input", value })
  }

  // const handleButtonClick = (filterType) => {
  //   onFilterChange({ type: "button", value: filterType })
  // }
  const handleButtonClick = (e) => {
    const filterType = e.target.dataset.filterType
    if (filterType) {
      onFilterChange({ type: "button", value: filterType })
    }
  }

  return (
    <div className={styles.filter}>
      <div className={styles.filter__search}>
        <div className={styles.filter__label}>Lookiing for</div>
        <input
          className={styles.filter__input}
          type="text"
          name="search"
          placeholder="start typing here..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.filter__filters}>
        <div className={styles.filter__label}>Or filter</div>
        <div className={styles.filter__buttons} onClick={handleButtonClick}>
          <button
            data-filter-type="Brazil"
            className={styles.filter__button}
            // onClick={() => handleButtonClick("Brazil")}
          >
            Brazil
          </button>
          <button
            data-filter-type="Kenya"
            className={styles.filter__button}
            // onClick={() => handleButtonClick("Kenya")}
          >
            Kenya
          </button>
          <button
            data-filter-type="Columbia"
            className={styles.filter__button}
            // onClick={() => handleButtonClick("Columbia")}
          >
            Columbia
          </button>
          <button
            data-filter-type="Clear"
            className={styles.filter__button}
            // onClick={() => handleButtonClick("Clear")}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter
