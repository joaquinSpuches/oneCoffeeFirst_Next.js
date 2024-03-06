'use client'

import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import BotonAtras from "../BotonAtras"

export default function FormularioRegister() {
    const {registerUser} = useAuthContext()
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
      <div className="flex justify-center h-screen ">
            <BotonAtras/>
                     <div className="z-1 w-1/2 flex flex-col justify-center items-center">
            <form className="flex flex-col bg-orange-200 p-3 rounded-md gap-5" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="email"
                value={values.email}
                required
                className="rounded-md p-2 w-52"
                placeholder="Email"
                name="email"
                onChange={handleChange} 
                />
                <input type="password"
                value={values.password}
                required
                className="rounded-md p-2 w-52"
                placeholder="Password"
                name="password"
                onChange={handleChange }
                 />
                 
                 <button className="rounded-md p-2 w-52 border-solid border-2 border-cyan-800 "   onClick={()=>registerUser(values)}>Registrar </button>
            </form>
       </div>
      </div>
    )  
};
