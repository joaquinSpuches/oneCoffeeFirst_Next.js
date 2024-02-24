"use client";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";

const crearProducto = async (values, file) => {
  const storageRef = ref(storage, values.id);
  const fileSnapshot = await uploadBytes(storageRef, file);
  const filerURL = await getDownloadURL(fileSnapshot.ref);

  const docRef = doc(db, "productos", values.id);
  return setDoc(docRef, {
    ...values,
    image: filerURL,
  }).then(console.log("producto agregado!"));
};

export default function FormularioCrear() {
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
    await crearProducto(values, file);
  };

  return (
    <form className=" bg-gray-400 flex flex-col border-blue-300 border-l-2 m-3">
      <input
        className="m-3"
        required
        placeholder="categoria"
        name="categoria"
        onChange={handleChange}
      />
      <input
        required
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        className="m-3"
        required
        placeholder="descripcion"
        name="descripcion"
        onChange={handleChange}
      />
      <input
        className="m-3"
        required
        type="number"
        placeholder="id"
        name="id"
        onChange={handleChange}
      />
      <input
        type="number"
        required
        name="precio"
        placeholder="precio"
        className="m-3"
      />
      <input
        className="m-3"
        required
        type="text"
        placeholder="titulo"
        name="titulo"
        onChange={handleChange}
      />

      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}
