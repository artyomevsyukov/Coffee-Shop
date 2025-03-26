import { useState, useEffect } from "react"
import getCoffeeData from "../services/getCoffeeData"

const useCoffeeData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const result = await getCoffeeData()
      setData(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const singleCoffeeData = async (id) => {
    if (data) {
      return data.find((item) => item.id === id)
    }

    try {
      const result = await getCoffeeData()
      return result.find((item) => item.id === id)
    } catch (error) {
      console.error("Error fetching single coffee data:", error)
      return null
    }
  }

  return { data, loading, error, refetch: fetchData, singleCoffeeData }
}

export default useCoffeeData
