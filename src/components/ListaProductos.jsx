import Producto from "./Producto";

function ListaProductos({ productos, agregarAlCarrito }) {
  return (
    <div className="lista-productos">
      {productos.map(p => (
        <Producto 
          key={p.id} 
          producto={p} 
          agregarAlCarrito={agregarAlCarrito} 
        />
      ))}
    </div>
  );
}

export default ListaProductos;