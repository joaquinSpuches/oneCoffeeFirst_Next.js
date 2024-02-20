import Image from "next/image"


export default async function page(params) {
    const data = await fetch(`http://Localhost:3000/api/productos/`, {
    cache: "no-cache",
  }).then((r) => r.json())
  const [elemento] = data.filter(e => e.id === 55)
  console.log()
    return(
    <Image src={elemento.image}
    alt="imagen"
    width={100}
    height={100}/>
    )
};
