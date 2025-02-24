const getCoffeeData = async () => {
  const url = "/JSON/data.json"

  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Error fetching coffee data:", error)
    throw error
  }
}

export default getCoffeeData
