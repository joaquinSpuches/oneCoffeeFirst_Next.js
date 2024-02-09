'use client'
import { useState } from "react"


const FormularioContacto = () => {
    const [values,setValues] = useState ({
        email:'',
        texto:''
    })
    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        await fetch('http://localhost:3000/api/contacto',{
            cache:'no-store',
            method: 'POST',
            body:JSON.stringify(values)
        })
    }



    return (
        <form className=" bg-gray-400 flex flex-col border-blue-300 border-l-2 m-3">
            <input className="m-3"
            type="email"
            required
            placeholder='tu email'
            name='email'
            onChange={handleChange}
           />
           <textarea
           className="m-3"
           required
           placeholder="Dejanos tu mensaje"
           name="texto"
           onChange={handleChange}
           />

           <input type="submit" onClick={handleSubmit} /> 
        </form>
    )
};
export default FormularioContacto
