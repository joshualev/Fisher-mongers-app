import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ authorised, children }) => {
  if (authorised === true) {
    return children
  } else if (authorised === false ) {
    return <Navigate to="/signin" />
  } else {
    return <p>Catching Fish..</p>
  }
}

export default ProtectedRoute