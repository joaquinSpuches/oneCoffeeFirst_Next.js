'use client'

import { useState } from "react"

export default function FormularioLogin() {
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
        <form>
            <input type="text" placeholder="user" onChange={handleChange} />
            <input type="text" placeholder="email" />

        </form>
    )
    
};
