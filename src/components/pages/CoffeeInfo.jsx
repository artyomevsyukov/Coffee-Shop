import { useParams } from "react-router-dom"
import useCoffeeData from "../../hooks/useCoffeeData"
import { useEffect, useState } from "react"
import AboutOur from "../aboutOur/AboutOur"
import ErrorMessage from "../errorMessage/ErrorMessage"

const CoffeeInfo = () => {
  const { coffeeId } = useParams()
  const id = Number(coffeeId)
  const [coffee, setCoffee] = useState(null)

  const { data, loading, error } = useCoffeeData()

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
  }, [data, id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      {coffee ? (
        <AboutOur data={coffee} align="start">
          {coffee.desc}
        </AboutOur>
      ) : (
        <ErrorMessage />
      )}
    </>
  )
}

export default CoffeeInfo
