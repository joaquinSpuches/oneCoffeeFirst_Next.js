import MiniTitle from "../../Components/MiniTitle";
import Precio from "../../Components/Precio";
import CarruselProductos from "../../Components/CarruselProductos";
import Text from "../../Components/Text";
import Image from "next/image";
import Title from "../../Components/Title";
const getProductsById = async (id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)

    if(!response.ok){
        throw new Error ('No se pudo hacer el fetch')
    }
    return response.json()
}

const Productos =async ({params})=> {
    const {id}  = params
    const producto = await getProductsById(id)
    console.log(producto);
   

    return (
    
        <div key={id} className=" p-5 bg-white flex flex-col items-center "> 
           
        <div className="pb-10  ">
        <Precio text={`USD ${producto.price}`} />  
        <Title text={`${producto.id}`}/>
        <div className=" mb-7 rounded-md bg-gray-100 flex justify-center px-10 ">
        <Image alt="DetalleProducto" src={'https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/main/Front/public/Asset%204.png'}  
        className="p-12"
        width={400}
        height={400}
          />    
    
        </div>
       
        </div>  
       <div className=" max-w-2xl" >
       <MiniTitle text={`${producto.title}`}  />
        <Text text='Etiopía es considerada la cuna del café, ya que fue allí donde se descubrió esta planta hace más de mil años. El café etíope se caracteriza por su gran diversidad de sabores, aromas y perfiles, debido a las diferentes regiones, altitudes, variedades y procesos que se emplean en su cultivo y elaboración. Algunas de las zonas más famosas por su café son Yirgacheffe, Sidamo, Harrar y Limu. '/>
        <Text text=' El café etíope suele tener un cuerpo ligero, una acidez cítrica y floral, y notas frutales, especiadas y dulces. Es un café ideal para disfrutar solo o con leche, y se puede preparar con diferentes métodos, como el filtro, el espresso o el tradicional jebena. El café etíope es uno de los más apreciados por los amantes del café de especialidad, ya que ofrece una experiencia única y exótica.'/>
        </div>
   
    </div>
    )
}


export default Productos