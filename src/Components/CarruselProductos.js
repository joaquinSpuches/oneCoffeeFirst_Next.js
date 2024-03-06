import Producto from "./Producto";

  export default async function CarruselProductos({ titulo, precio, id }) {
  const data = await fetch(process.env.URL + '/api/productos', {
    cache: "no-store",
  }).then((r) => r.json());

  const Destacados = data.slice(0,5)
  return (
    <div className="flex overflow-x-scroll w-full sm:h-80 pl-4 ">
      {Destacados.map((e, i) => {

        return (
          <Producto key={i} titulo={e.titulo} precio={e.precio} id={e.slug} image={e.image} />
        );
      })}
    </div>
  );
}
