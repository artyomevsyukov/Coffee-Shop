import { useParams } from "react-router-dom"
import useCoffeeData from "../../hooks/useCoffeeData"
import { useEffect, useState } from "react"
import AboutOur from "../aboutOur/AboutOur"

const CoffeeInfo = () => {
  const { coffeeId } = useParams()
  const id = Number(coffeeId)
  const [coffee, setCoffee] = useState(null)

  const { data, loading, error } = useCoffeeData()
  console.log("useCoffeeData: ", data)

  useEffect(() => {
    // const foundCoffee = data.find((item) => item.id === id) || null
    if (data) {
      const foundCoffee = data.find((item) => item.id === id) || null
      if (foundCoffee) {
        // Перезаписываем img значением thumbnail
        const updatedCoffee = {
          ...foundCoffee,
          img: foundCoffee.thumbnail,
        }
        setCoffee(updatedCoffee)
      } else {
        setCoffee(null)
      }
    }
  }, [data, id, coffee])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      {coffee ? (
        <AboutOur data={coffee} align="start">
          {coffee.desc}
        </AboutOur>
      ) : (
        <div>No data found</div>
      )}
    </>
  )
}

export default CoffeeInfo
