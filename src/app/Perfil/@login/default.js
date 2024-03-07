'use client'
import FormularioLogin from "@/Components/auth/FormularioLogin";
import { useState } from 'react';
export default function LoginLayout(params) {
    const [showDenied, setShowDenied] = useState(false);

    // Simulamos un tiempo de carga de 2 segundos
    setTimeout(() => {
        setShowDenied(true);
    }, 2000);

    return (
        <div>
            {showDenied ? (
              <FormularioLogin/>
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
}