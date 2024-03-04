import Edición from "@/Components/Edición";

export default async function page(id) {
    const productoid = id.params.id
    console.log(id);
    
    const producto = await fetch(`http://Localhost:3000/api/productos/${productoid}`,{
        cache: 'no-store'
    }).then((r)=>r.json())
    return(
        <Edición producto={ producto}/>
    )
};
