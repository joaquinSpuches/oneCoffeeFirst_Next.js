import Title from "../Components/Title"
import MiniTitle from "../Components/MiniTitle"
import Filtro from "../Components/Filtro"
import Producto from "../Components/Producto"


const getProducts = async () =>{
    const response = await fetch ('http://localhost:3000/api/productos')

    if(!response.ok){
        throw new Error('Fallo la obtención de datos')
    }
    return response.json()
}

export default async function page(params) {
       
    const response = await fetch('http://Localhost:3000/api/productos', 
    {cache: 'force-cache',
    next: {
        tags:['productos']
        }
    }).then (r =>r.json())
  
  
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
                 <li key={producto.id}>   <Producto titulo={producto.titulo} precio={`USD ${producto.precio}  ` } id={producto.id} /></li>
                )
            })}
           
            </ul>
            </div>
        </div>
        
    )
};
