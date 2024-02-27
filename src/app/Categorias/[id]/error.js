'use client'

import { useEffect } from "react"   

export default function Error(error,reset) {
    useEffect(() => {
      console.log(error);
    }, [error])
    return (
        <div>
            
            <h1>Hubo un error</h1>
            <p>{error}</p>
            <button onClick={reset}>Intentar nuevamente</button>
        </div>
    )
}

//no estaria sabiendo si esta funcionando o no XD 
