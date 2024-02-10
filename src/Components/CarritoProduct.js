import Precio from "./Precio";
import Contador from "./Contador";
import MiniTitle from './MiniTitle'
export default function CarritoProduct(params) {
    
    return(
        <div className="flex justify-between border-b-2 border-gray-400">
            
           <div className="flex">
           <div className="w-28 flex justify-center m-4 p-4 bg-gray-100 rounded-md ">
            <img className="h-20" alt='producto'src='https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/main/Front/public/Asset%204.png'/>
            </div>
            <div className="flex flex-col justify-around">
                <div>
                    <MiniTitle text='Etiopia' />
                    <Precio text='USD 9,99' />
                </div>
                <Contador />
            </div>
           </div>
            <div className="self-end m-4">
                <div>
                    <img alt='eliminar' src="https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/04b416a9dbb2a213977d4581f768c05b6c8754f7/Front/public/trash.svg" />
                </div>
            </div>
            
        </div>
    )
};
