import Link from "next/link";
import { deleteDoc,doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import BotonEliminar from "./BotonEliminar";
const FormularioEditar = async function () {
 
  const data = await fetch(
  process.env.URL + "/api/productos", {
    cache: "no-store",
  }).then((r) => r.json());
  console.log(data);


  
  return (
    <section className=" mt-10 ">
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
          {data.map((e) => {
            return (
              <tr className=" text-center " key={e.slug}>
                <td>{e.titulo}</td>
                <td>{e.precio}</td>
                <td>{e.categoria}</td>
                <td>100</td>
                <td>
                  <Link href={`editar/${e.slug}`}>Editar</Link>
                 <BotonEliminar slug ={e.slug}  />
                </td>
              </tr>
            );
          },[])}
        </tbody>
      </table>
    </section>
  );
};

export default FormularioEditar;
