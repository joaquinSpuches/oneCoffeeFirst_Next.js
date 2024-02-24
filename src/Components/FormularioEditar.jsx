import Link from "next/link";

const FormularioEditar = async function () {
  const data = await fetch("http://Localhost:3000/api/productos",{
    cache: 'no-cache'
  }).then((r) =>
    r.json()
  );

  return (
    <section className=" mt-10 ">
      {/* <ul>
        {data.map((e) => {
          return (
            <li key={e.id}>
              <article className="flex w-full justify-between border-b-2 border-slate-400 mb-10 ">
                <h3>{e.titulo}</h3>
                <p>{e.precio} </p>
                <Image alt={`${e.titulo}`} src={"https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/main/Front/public/Asset%204.png"} width={100} height={100} />
                <div className="flex flex-col">
                  <Link href={''}>Editar</Link>
                  <span>Eliminar</span>

                </div>
              </article>
              
            </li>
          );
        })}
      </ul>
       */}
       <table className="w-full">
  <thead>
    <tr>
      <th>Nombre del Producto</th>
      <th>Precio</th>
      <th>Categoría</th>
      <th>Stock</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
   {data.map((e)=>{
    return(
      <tr className=" text-center " key={e.titulo}>
      <td>{e.titulo}</td>
      <td>{e.precio}</td>
      <td>{e.categoria}</td>
      <td>100</td>
      <td><Link href={`editar/${e.id}`}>Editar</Link></td>
    </tr>
    )
   })}
  </tbody>
</table>

    </section>
  );
};

export default FormularioEditar;
