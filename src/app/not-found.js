import Link from "next/link";

export default function NotFound(params) {
    return(
        <div>
            no existe esta pagina <br/>
            <Link href={'/'} className=" text-blue-700  ">Link al inicio</Link>
        </div>
    )
};
