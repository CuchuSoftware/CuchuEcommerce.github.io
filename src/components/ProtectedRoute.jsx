import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = true; // Cambiar según lógica de autenticación
  return isAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;