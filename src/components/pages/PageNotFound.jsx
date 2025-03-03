import ErrorMessage from "../errorMessage/ErrorMessage"

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center", fontSize: "50px", margin: "auto 0 " }}>
      <h1 style={{ textAlign: "center", marginTop: "30px", fontSize: "50px" }}>
        Page Not Found
      </h1>
      <ErrorMessage />
    </div>
  )
}

export default PageNotFound
