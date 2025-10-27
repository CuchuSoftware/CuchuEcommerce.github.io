import { useState, useEffect } from "react";
import ListaProductos from "../components/ListaProductos";
import Carrito from "../components/Carrito";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar los productos.</p>;

  return (
    <div className="productos-page">
      <ListaProductos productos={productos} agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} />
    </div>
  );
}

export default Productos;