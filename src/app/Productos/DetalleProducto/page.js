import MiniTitle from "../../Components/MiniTitle";
import Precio from "../../Components/Precio";
import CarruselProductos from "../../Components/CarruselProductos";
import Text from "../../Components/Text";
import Title from "../../Components/Title";

export default function page(params) {
    
    return(
        <div className=" p-5 bg-white "> 
           
            <div className="pb-10">
            <Precio text='USD 9,99' />
            <Title text='Etiopia'/>
            <div className=" mb-7 rounded-md bg-gray-100 flex justify-center mt-5 ">
            <img alt="DetalleProducto" src={'https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/main/Front/public/Asset%204.png'}  
            className="p-4"
              />    
        
            </div>
            <MiniTitle text='Etiopia'  />
            <Text text='Etiopía es considerada la cuna del café, ya que fue allí donde se descubrió esta planta hace más de mil años. El café etíope se caracteriza por su gran diversidad de sabores, aromas y perfiles, debido a las diferentes regiones, altitudes, variedades y procesos que se emplean en su cultivo y elaboración. Algunas de las zonas más famosas por su café son Yirgacheffe, Sidamo, Harrar y Limu. '/>
            <Text text=' El café etíope suele tener un cuerpo ligero, una acidez cítrica y floral, y notas frutales, especiadas y dulces. Es un café ideal para disfrutar solo o con leche, y se puede preparar con diferentes métodos, como el filtro, el espresso o el tradicional jebena. El café etíope es uno de los más apreciados por los amantes del café de especialidad, ya que ofrece una experiencia única y exótica.'/>
     
            </div>   
       
        </div>
    )
};
