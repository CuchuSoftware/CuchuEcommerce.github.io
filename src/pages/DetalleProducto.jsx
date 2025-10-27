import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProducto(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducto();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error al cargar el producto.</p>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <p>${producto.price}</p>
      <p>{producto.description}</p>
    </div>
  );
}

export default DetalleProducto;