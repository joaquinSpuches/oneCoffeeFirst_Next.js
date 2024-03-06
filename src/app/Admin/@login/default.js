import FormularioLogin from "@/Components/auth/FormularioLogin"
//This default.js redirects when reloading after /Admin url
// Fixies error 404 not found when reloading the page   
export default function Default(params) {
    return(
        <div><h1>Acceso denegado</h1><a href="/">Ir al inicio</a>
        </div>
    )
};
