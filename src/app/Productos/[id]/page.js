import MiniTitle from "../../../Components/MiniTitle";
import Precio from "../../../Components/Precio";
import Text from "../../../Components/Text";
import Image from "next/image";

import Title from "../../../Components/Title";
import Link from "next/link";
import BotonAñadir from "@/Components/BotonAñadir";
const Productos = async (id) => {
  const productid = id.params.id;

  const data = await fetch(`http://Localhost:3000/api/productos/${productid}`, {
    cache: "no-cache",
  }).then((r) => r.json());

  const producto = data;

  return (
    <div key={id} className=" p-5 bg-white flex flex-col items-center ">
      <Precio text={`USD ${producto.precio}`} />
      <Title text={`${producto.titulo}`} />
      <div className="pb-10">
        <div className=" mb-7 rounded-md bg-gray-100 flex justify-center px-10 ">
          <Image
            alt="DetalleProducto"
            src={
              "https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/main/Front/public/Asset%204.png"
            }
            className="p-12"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className=" max-w-2xl">
        <MiniTitle text={`${producto.titulo}`} />
        <Text text="Etiopía es considerada la cuna del café, ya que fue allí donde se descubrió esta planta hace más de mil años. El café etíope se caracteriza por su gran diversidad de sabores, aromas y perfiles, debido a las diferentes regiones, altitudes, variedades y procesos que se emplean en su cultivo y elaboración. Algunas de las zonas más famosas por su café son Yirgacheffe, Sidamo, Harrar y Limu. " />
        <Text text=" El café etíope suele tener un cuerpo ligero, una acidez cítrica y floral, y notas frutales, especiadas y dulces. Es un café ideal para disfrutar solo o con leche, y se puede preparar con diferentes métodos, como el filtro, el espresso o el tradicional jebena. El café etíope es uno de los más apreciados por los amantes del café de especialidad, ya que ofrece una experiencia única y exótica." />
      </div>

      <BotonAñadir item={{
        titulo:producto.titulo,
        precio:producto.precio}} />
    </div>
  );
};

export default Productos;
