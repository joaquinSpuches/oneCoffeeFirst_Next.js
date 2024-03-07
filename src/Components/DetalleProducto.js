import Precio from "./Precio";
import MiniTitle from "./MiniTitle";
import Text from "./Text";
import Image from "next/image";
import Title from "./MiniTitle";
import BotonAñadir from "./BotonAñadir";


export default async function DetalleProducto({ productid }) {

  const data = await fetch(process.env.URL + `/api/productos/${productid}`, {
    cache: "no-store",
  }).then((r) => r.json());

  const producto = data;
  return (
    <article
      key={productid}
      className=" p-5 bg-white flex flex-col items-center "
    >
      <Title text={`${producto.titulo}`} />
      <div className="pb-10 w-full">
        <div className=" mb-7 rounded-md bg-gray-100 flex justify-center px-10 ">
          <Image
            alt="DetalleProducto"
            src={
              producto.image
            }
            
            width={300}
            height={534}
          />
        </div>
      </div>
      <div className=" max-w-2xl">
            <Precio text={`USD ${producto.precio}`} />
        <MiniTitle text={`${producto.titulo}`} />
        <Text text= {`${producto.descripcion}`} />
      
      </div>

      <BotonAñadir
        item={{
          titulo: producto.titulo,
          precio: producto.precio,
          image: producto.image,
        }}
      />
    </article>
  );
}
