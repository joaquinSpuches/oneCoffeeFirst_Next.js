export default function CartelAñadido({off}) {
    
    return(
        <div className={`${off?'opacity-1': 'opacity-0'} fixed bottom-0 z-50 transition ease-out ` }>
            <h1 className='text-2xl text-center  p-5 py-7 font-bold w-screen text-white  bg-green-500'>Añadido al carrito</h1>
        </div>
    )
};
