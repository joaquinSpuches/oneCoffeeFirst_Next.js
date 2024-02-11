import CarritoProduct from '../../Components/CarritoProduct'
import MiniTitle from '../../Components/MiniTitle'
import Title from '../../Components/Title'
export default function page(params) {
    return (
        <div className='mt-5'>
            <div className='p-5'>
            <Title text='Carrito' />
            </div>
           <CarritoProduct />
          
    
        </div>
    )
};
