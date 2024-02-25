import Link from "next/link";
import { deleteDoc,doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import BotonEliminar from "./BotonEliminar";
const FormularioEditar = async function () {
  const data = await fetch("http://Localhost:3000/api/productos", {
    cache: "no-cache",
  }).then((r) => r.json());



  
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
              <tr className=" text-center " key={e.id}>
                <td>{e.titulo}</td>
                <td>{e.precio}</td>
                <td>{e.categoria}</td>
                <td>100</td>
                <td>
                  <Link href={`editar/${e.slug}`}>Editar</Link>
                 <BotonEliminar id ={e.id}  />
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
