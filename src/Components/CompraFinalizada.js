import Link from "next/link";

export default function CompraFinalizada(params) {
    return (
        <div className="absolute z-10 top-[50vh] left-[50vw] w-52 rounded-lg bg-green-300">
            <h1>Compra finalizada</h1>
            <Link href="/">Ir al inicio</Link>
        </div>
    )
};
