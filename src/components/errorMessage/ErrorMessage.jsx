import { useNavigate, Link } from "react-router-dom" // Импортируем useNavigate

import img from "./error.gif"

const ErrorMessage = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
    // if (window.history.length > 1) {
    //   navigate(-1)
    // } else {
    //   navigate("/")
    // }
    // navigate(-1)

    // setTimeout(() => {
    //   if (window.location.pathname !== "/") {
    //     navigate("/")
    //   }
    // }, 100)
  }
  return (
    <div style={{ textAlign: "center", fontSize: "50px", margin: "auto 0 " }}>
      <img
        style={{
          display: "block",
          width: "250px",
          height: "250px",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={img}
        alt="Error"
      />
      <button
        onClick={handleGoBack}
        style={{
          display: "block",
          margin: "30px auto  30px",
          fontSize: "50px",
          color: "blue",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}>
        Back to previous page
      </button>
      Or
      <Link
        to={"/"}
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "30px",
          fontSize: "50px",
          color: "blue",
        }}>
        Back to main page
      </Link>
    </div>
  )
}

export default ErrorMessage
