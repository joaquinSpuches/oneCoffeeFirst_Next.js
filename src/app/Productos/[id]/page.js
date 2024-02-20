import MiniTitle from "../../../Components/MiniTitle";
import Precio from "../../../Components/Precio";
import Text from "../../../Components/Text";
import Image from "next/image";
import DetalleProducto from '@/Components/DetalleProducto'
import Title from "../../../Components/Title";
import Link from "next/link";
import BotonAñadir from "@/Components/BotonAñadir";
import { Suspense } from "react";
const Productos =  (id) => {
  const productid = id.params.id;
  console.log(productid);

  return (
    <Suspense fallback = {<p>Cargando</p>}>
      <DetalleProducto productid={productid}/>
    </Suspense>
  );
};

export default Productos;
