function Producto({ producto, agregarAlCarrito }) {
  return (
    <div className="producto">
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
}

export default Producto;