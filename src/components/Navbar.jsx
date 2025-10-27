import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({isActive}) => isActive ? "activo" : ""}>Inicio</NavLink>
      <NavLink to="/productos" className={({isActive}) => isActive ? "activo" : ""}>Productos</NavLink>
      <NavLink to="/perfil" className={({isActive}) => isActive ? "activo" : ""}>Perfil</NavLink>
    </nav>
  );
}

export default Navbar;