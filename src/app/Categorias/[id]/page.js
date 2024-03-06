import Title from "../../../Components/Title";
import MiniTitle from "../../../Components/MiniTitle";
import Filtro from "../../../Components/Filtro";
import Producto from "../../../Components/Producto";

export default async function page(categorias) {
  const categoria = categorias.params.id;

  const data = await fetch(
    process.env.URL + `/api/categorias/${categoria}`,
    {
      cache: "no-store",
    }
  ).then((r) => r.json());
  if (data[0] === undefined ){
    return (<div>
      <h1>No hay elementos para esa categoria</h1>
    </div>)
  }else { 
  return (
    <div>
      <div className="p-5">
        <Title text={data[0].categoria} />
      </div>
      <div className="bg-gray-100 rounded-lg">
        <br />
        <Filtro params={["Origen", "Blend", "Accesorios", "Todos"]} />
        <ul className="flex  flex-wrap justify-center ">
          {data.map((producto) => {
            return (
              <Producto
                key={producto.slug}
                titulo={producto.titulo}
                image = {producto.image}
                precio={`USD ${producto.precio}  `}
                id={producto.slug}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}}
