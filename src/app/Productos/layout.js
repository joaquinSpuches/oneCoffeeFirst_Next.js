import HeaderDetalle from "../Components/HeaderDetalle";
import Precio from "../Components/Precio";
import CarruselProductos from "../Components/CarruselProductos";
import MiniTitle from "../Components/MiniTitle";
export default function layout({children}) {
    return(
            <div>
        <div>
            <HeaderDetalle/>    
            {children}
        </div>


    </div>
    )
};
