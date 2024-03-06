import Novedades from "../Components/Novedades";
import Title from "../Components/Title";
import Text from "../Components/Text";
import Header from "../Components/Header";

import Navegador from "../Components/Navegador";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 ">
      <Header />
      <div className="pt-10 pb-10 flex flex-col sm:flex-row justify-start  size-full">
        <div className="w-3/">
          <Text text={"Café unico de origen"} />
          <Title text="Que café quieres?" />
        </div>
        { //Aqui va el buscador pero como no esta implementado lo comento.//

        /* <form className="w-full">
          <input
            name="search"
            type="search"
            placeholder="Buscar"
            className=" sm:w-full my-10 rounded-md placeholder-gray-300 border-2 border-gray-300 text-xs px-6 py-4"
          />
        </form> */}
      </div>

      <Novedades />
    </main>
  );
}
