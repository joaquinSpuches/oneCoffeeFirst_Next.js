import Link from "next/link";
import Text from "./Text";
export default function Filtro({ params }) {
  return (
    <ul className=" flex justify-start overflow-x-scroll  md:overflow-auto whitespace-nowrap ">
      {params.map((e) => {
        return (
          <Link key={e} href={`/Categorias/${e}`} className="transition ease-in hover:scale-105 hover:underline p-2 mb-5 mr-2 rounded-md  text-gray-400">
            {e}
          </Link>
        );
      })}
    </ul>
  );
}
