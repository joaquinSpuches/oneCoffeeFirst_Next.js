import Producto from "./Producto";

export default function CarruselProductos({params}) {
    return(
        <div className="flex overflow-scroll w-full pl-4 ">
            <Producto params={params} />
            <Producto params={params} />
            <Producto params={params} />
            <Producto params={params} />
            <Producto params={params} />
            <Producto params={params} />
            <Producto params={params} />
            <Producto params={params} />
        </div>
    )
    
};
