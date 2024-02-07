export default async function ProductList(params) {

    const response = await fetch('http://Localhost:3000/api/productos', 
    {cache: 'no-store'}).then (r =>r.json())

    return (
        <div>
            <ul>
                <div>
                    {response.map(e=>{
                        return <p key={e.id}>{e.titulo}</p>
                    })}
                </div>
            </ul>
        </div>
    )    
};
