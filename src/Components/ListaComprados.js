'use client'
import { log } from "util";
import { useAuthContext } from "./context/AuthContext";


export default function ListaComprados({data}) {
    const {user} = useAuthContext();  
 
    
    const compras = data.filter((e) => e.user === user.uid);      
    
     
    return(
        <ul>
           {compras.map((e,i) => {
            let total = 0;
                // for(let i = 0; i<e.cart.length; i++){
                //     console.log(e.cart[i]);
                // }
            return(
                //le asigno un numero al azar en el id
                <div key={Math.random() }> 
                Compra {i+1}
                <ul>
                    {e.cart.map((e) => {
                         total += Number(e.item.precio)
                       
                        return(
                            <li key={Math.random()}>
                                {e.item.titulo} - {e.item.precio} 
                                </li>
           )})}
                        
                    </ul>
                    <p>Total: {total}</p>
                    </div>
            )
            }
            )}
        </ul>
    )
};
