import Title from "../Components/Title"
import MiniTitle from "../Components/MiniTitle"
import Filtro from "../Components/Filtro"
import Producto from "../Components/Producto"
import { API_FAKE_STORE } from "../contants"
export default  function page(params) {

    return(
        <div >
            <div className="p-5">
            <MiniTitle text='Origen' />
            <Title text='Destacados' />
            </div>
            <div className="bg-gray-100 rounded-lg">
            <br/>
            <Filtro params={['Precio mas alto primero', 'Populares','Nuevos', 'Nuestros tuestes']} />
            <div className="flex  flex-wrap justify-center ">
            <Producto params={'ETIOPIA'} />
            <Producto params={'ETIOPIA'} />
            <Producto params={'ETIOPIA'} />
            <Producto params={'ETIOPIA'} />
            <Producto params={'ETIOPIA'} />
            <Producto params={'ETIOPIA'} />
           
            </div>
            </div>
        </div>
        
    )
};
