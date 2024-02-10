import Producto from "./Producto";

export default function CarruselProductos({titulo, precio, id}) {
    return(
        <div className="flex overflow-x-scroll w-full pl-4 ">
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
            <Producto titulo={titulo} precio={precio} id={id}  />
         
           
           
        </div>
    )
    
};
