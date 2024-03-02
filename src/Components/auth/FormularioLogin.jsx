'use client'

import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

export default function FormularioLogin() {
    const {registerUser, loginUser} = useAuthContext
    const [values, setValues] = useState ({
        email: '',
        password:''
    })

    const handleChange = (e)=> {
        setValues ({
            ...values,
        [e.target.name]: e.target.value
        }) 
    }

    const handleSubmit = async(e)=>{ 
    e.preventDefault();
}

    return(
       <div className="z-10 bg-slate-600">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <h2>login</h2>
                <input type="email"
                value={values.email}
                required
                placeholder="Tu email"
                name="email"
                onChange={handleChange} 
                />
                <input type="password"
                value={values.password}
                required
                placeholder="Tu password"
                name="password"
                onChange={handleChange }
                 />
                 <button onClick={()=> loginUser(values)}>Ingresar</button>
                 <button onClick={()=>registerUser(values)}>Registrar </button>
            </form>
       </div>
    )  
};
