export default async function ProductList(params) {
    const Lista =[ { 
        title: 'TITULO 1',
        precio: '033'
    },{
        title: 'TITULO 2',
        precio: '9,90'
    }]
    const response = await fetch('http://Localhost:3000/api/productos', 
    {cache: 'no-store'}).then (r =>r.json())
    console.log(response);
    return (
        <div>
            <ul>
                <div>
                    {Lista.map(e=>{
                        return <p>{e.title}</p>
                    })}
                </div>
            </ul>
        </div>
    )    
};
