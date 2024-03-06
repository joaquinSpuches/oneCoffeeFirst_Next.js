import DetalleProducto from "@/Components/DetalleProducto";
import FallbackProducto from "@/Components/fallbacks/FallbackProducto";
import { Suspense } from "react";
const Productos = (id) => {
  const productid = id.params.id;


  return (
      <section className="flex justify-center"> 
    <Suspense fallback={<FallbackProducto/>}>
      <DetalleProducto productid={productid} />
    </Suspense>
    </section>
  );
};

export default Productos;
