import Title from "../../../Components/Title";
import MiniTitle from "../../../Components/MiniTitle";
import Filtro from "../../../Components/Filtro";
import Producto from "../../../Components/Producto";

export default async function page(categorias) {
  const categoria = categorias.params.id;

  const data = await fetch(
    `http://localhost:3000/api/categorias/${categoria}`,
    {
      cache: "no-cache",
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
                key={producto.id}
                titulo={producto.titulo}
                precio={`USD ${producto.precio}  `}
                id={producto.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}}