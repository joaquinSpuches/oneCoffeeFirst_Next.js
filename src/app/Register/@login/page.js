'use client'
import { useState } from 'react';
import FormularioLogin from "@/Components/auth/FormularioLogin";

export default function Page() {
    const [showDenied, setShowDenied] = useState(false);

    // Simulamos un tiempo de carga de 2 segundos
    setTimeout(() => {
        setShowDenied(true);
    }, 2000);

    return (
        <div>
            {showDenied ? (
                <div>
                    <h1>Ya esta registrado!</h1>
                    <a href="/Perfil">Ir a mi Perfil</a>
                </div>
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
}