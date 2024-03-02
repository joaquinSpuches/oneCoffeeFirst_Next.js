import FormularioEditar from "@/Components/FormularioEditar"
import Header from "@/Components/Header"
import FallbackEditarProducto from "@/Components/fallbacks/FallbackEditarProducto"
import { Suspense } from "react"

export default function page(params) {
    return(
        <main>
            <Header/>
            <Suspense fallback={<FallbackEditarProducto/>} >
            <FormularioEditar />
            </Suspense>
        </main>
    )
};
