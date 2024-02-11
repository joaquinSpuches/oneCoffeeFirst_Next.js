import Producto from "./Producto";

export default async function CarruselProductos({ titulo, precio, id }) {
  const data = await fetch(`http://Localhost:3000/api/productos`, {
    cache: "no-cache",
  }).then((r) => r.json());
  return (
    <div className="flex overflow-x-scroll w-full pl-4 ">
      {data.map((e, i) => {
        return (
          <Producto key={i} titulo={e.titulo} precio={e.precio} id={e.id} />
        );
      })}
    </div>
  );
}
