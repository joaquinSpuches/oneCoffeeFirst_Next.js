import Link from "next/link";
import Text from "./Text";
export default function Filtro({ params }) {
  return (
    <ul className=" flex overflow-x-scroll whitespace-nowrap ">
      {params.map((e) => {
        return (
          <Link key={e} href={`/Categorias/${e}`} className="px-5 text-gray-400">
            {e}
          </Link>
        );
      })}
    </ul>
  );
}
