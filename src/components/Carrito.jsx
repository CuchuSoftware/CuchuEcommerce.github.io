function Carrito({ carrito }) {
  return (
    <div className="carrito">
      <h2>Carrito</h2>
      {carrito.length === 0 ? <p>Carrito vacío</p> : null}
      {carrito.map((p, i) => (
        <div key={i}>
          {p.title} - ${p.price}
        </div>
      ))}
    </div>
  );
}

export default Carrito;