import { doc, setDoc } from "firebase/firestore";
import { useCartContext } from "./context/cartcontext";
import { db } from "@/firebase/config";
import { useAuthContext } from "./context/AuthContext";
export default function BotonComprar() {
    
    const {cart} = useCartContext()
    const {setCart} = useCartContext()
    const {user} = useAuthContext()
    const docRef = doc(db, "ventas", Date.now().toString())
  
    const handleSubmit = () => {
      const ConfirmarCompra = window.confirm(
        "¿Estás seguro de que deseas finalizar la compra?"
      );
        // si al comprar el comrpador no esta logeado le pide que se logee antes
        if(user.logged){
                
          if (ConfirmarCompra) {
            
            setDoc(docRef, {
              ...cart,
              user: user.uid}).then(() => {
                setCart([]) //reinicia el carrito una vez que se finaliza la compra
                console.log(cart);
                console.log("compra finalizada");
                window.location.href = '/'
          
            
            })
          }else{
            alert('Compra cancelada')
          }
          
        }else{
            // si no esta logeado lo redirige a la pagina de login
            window.location.href = '/Perfil'
        
    }}

    
    
    return (
        <div onClick={handleSubmit} className=" cursor-pointer l-0 w-full absolute">
          <div className="h-12 l-0  w-screen fixed bottom-10 flex justify-center">
            <div className="bg-indigo-900 rounded-full p-4 w-3/4 items-center justify-center flex">
              <p className="font-bold text-white ">
                Finalizar mi compra
              </p>
            </div>
          </div>
        </div>
      );
}
    
