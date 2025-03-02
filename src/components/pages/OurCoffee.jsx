import AboutOur from "../aboutOur/AboutOur"
import Divider from "../divider/Divider"
import CoffeeCardList from "../CoffeeCardList/CoffeeCardList"
import useCoffeeData from "../../hooks/useCoffeeData"

import img from "../../assets/AboutOurBeansImg.jpg"
import Filter from "../Filter/Filter"
import { useEffect, useState } from "react"

const OurCoffee = () => {
  // const coffeeData = useCoffeeData()
  // const { data, loading, error, refetch } = coffeeData
  const { data, loading, error, refetch } = useCoffeeData()
  const [coffeeList, setCoffeeList] = useState([])
  // const [originalData, setOriginalData] = useState([])

  useEffect(() => {
    setCoffeeList(data)
    // setOriginalData(data)
  }, [data])
  // Обработчик изменения фильтра
  const handleFilterChange = (filter) => {
    // Здесь можно обновить состояние или выполнить фильтрацию данных

    if (!data.length) return

    switch (filter.value) {
      case "Brazil":
        setCoffeeList(data.filter((item) => item.country === "Brazil"))
        break
      case "Kenya":
        setCoffeeList(data.filter((item) => item.country === "Kenya"))
        break
      case "Columbia":
        setCoffeeList(data.filter((item) => item.country === "Columbia"))
        break
      case "Clear":
        setCoffeeList(data)
        break
      default:
        setCoffeeList(data)
        break
    }
  }

  return (
    <>
      <AboutOur data={{ img }} title="About Our Beans">
        <p>
          Extremity sweetness difficult behaviour he&nbsp;of. On <br />
          disposal of&nbsp;as&nbsp;landlord horrible.
          <br />
          <br />
          Afraid at&nbsp;highly months do&nbsp;things on&nbsp;at. Situation{" "}
          <br />
          recommend objection do&nbsp;intention <br />
          so&nbsp;questions. As&nbsp;greatly removed calling pleased
          improve&nbsp;an. <br />
          Last ask him cold feel <br /> met spot shy want. Children
          me&nbsp;laughing we <br />
          prospect answered followed. At&nbsp;it&nbsp;went <br /> is&nbsp;song
          that held help face.
        </p>
      </AboutOur>
      <Divider />
      <Filter onFilterChange={handleFilterChange} />

      <CoffeeCardList
        data={coffeeList}
        loading={loading}
        error={error}
        refetch={refetch}
      />
      {/* <CoffeeCardList {...coffeeData} /> */}
      {/* <CoffeeCardList props={{ data, loading, error, refetch }} /> */}
    </>
  )
}

export default OurCoffee
