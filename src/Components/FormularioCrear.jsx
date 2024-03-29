"use client"
import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { useRouter } from "next/navigation";
import { db, storage } from "@/firebase/config";

const crearProducto = async (values, file, id, slug) => {
  const storageRef = ref(storage,slug);
  const fileSnapshot = await uploadBytes(storageRef, file);
  const filerURL = await getDownloadURL(fileSnapshot.ref);

  const docRef = doc(db, "productos", slug);
  return setDoc(docRef, {
    ...values,
    image: filerURL,
    id: id.toString(),
    slug: slug
  }).then(() => console.log("producto agregado!"));
};
export default function FormularioCrear() {
  const router = useRouter();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.URL + '/api/productos', {
          cache: 'no-store'
        });
        const data = await response.json();
        
        setProductos(data); // Actualizar el estado con los datos obtenidos
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    fetchData();
     // Llamar a la función fetchData cuando el componente se monte
    
  }, []);

  const id = productos.length + 1 

  
  const [file, setFile] = useState(null);
  const [values, setValues] = useState({
    categoria: "",
    descripcion: "",
    id: "",
    titulo: "",
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slug = values.titulo + Date.now()
    console.log(file);
    console.log(values);
    const si = window.confirm('Deseas crear el producto')

    if(si){
      await crearProducto(values, file, id, slug);
      
      router.back()

    }
  };
  const categorias = ["Blend", "Origen", "Accesorios"];

  return (
    <form className=" bg-gray-400 flex flex-col border-blue-300 border-l-2 m-3">
      <input
        className="m-3"
        required
        type="text"
        placeholder="Nombre del producto"
        name="titulo"
        onChange={handleChange}
      />
      <select
        id="categoria"
        required
        className="m-3"
        name="categoria"
        onChange={handleChange}
        defaultValue={"Elige la categoria"}
        
      >
        <option value='Elige la categoria' key="Elige"  disabled>
          Elige la categoria
        </option>
        {categorias.map((cat) => (//no esta funcionando el POST de categoria. CORREGIR 
          <option key={cat} value={cat}>    
            {cat}
          </option>
        ))}
      </select>
      <input
        className="m-3"
        required
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <textarea
        className="m-3"
        required
        placeholder="descripcion"
        name="descripcion"
        onChange={handleChange}
      />
      {/* <input
        className="m-3"
        type="number"
        required
        placeholder="id"
        name="id"
        value={id}
        onChange={handleChange}
      /> */}

      <input
        type="number"
        required
        name="precio"
        placeholder="precio"
        className="m-3"
        onChange={handleChange}
      />

      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}
