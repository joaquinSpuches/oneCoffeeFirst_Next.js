import Title from "../Components/Title"
import MiniTitle from "../Components/MiniTitle"
import Filtro from "../Components/Filtro"
import Producto from "../Components/Producto"
import { API_FAKE_STORE } from "../contants"

const getProducts = async () =>{
    const response = await fetch ('https://fakestoreapi.com/products')

    if(!response.ok){
        throw new Error('Fallo la obtención de datos')
    }
    return response.json()
}

export default async function page(params) {
       

        const data = await getProducts()
       
    return(
        <div >
            <div className="p-5">
            <MiniTitle text='Origen' />
            <Title text='Destacados' />
            </div>
            <div className="bg-gray-100 rounded-lg">
            <br/>
            <Filtro params={['Precio mas alto primero', 'Populares','Nuevos', 'Nuestros tuestes']} />
            <ul className="flex  flex-wrap justify-center ">
            {data.map((producto)=>{
                
                return(
                    <Producto titulo={producto.id} precio={`USD ${producto.price}`} />
                )
            })}
           
            </ul>
            </div>
        </div>
        
    )
};
