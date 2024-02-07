import Producto from "./Producto";

export default function CarruselProductos({titulo, precio}) {
    return(
        <div className="flex overflow-scroll w-full pl-4 ">
            <Producto titulo={titulo} precio={precio} />
            <Producto titulo={titulo} precio={precio} />
            <Producto titulo={titulo} precio={precio} />
            <Producto titulo={titulo} precio={precio} />
            <Producto titulo={titulo} precio={precio} />
            <Producto titulo={titulo} precio={precio} />
            <Producto titulo={titulo} precio={precio} />
            <Producto titulo={titulo} precio={precio} />
           
           
        </div>
    )
    
};
