"use client";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
const BotonEliminar = async function ({ slug }) {
  console.log(slug);
  const eliminarProducto = async (slug) => {
    await deleteDoc(doc(db, "productos", slug));
  };
  const handleDelete = async (e) => {
    e.preventDefault();

    const confirmResult = window.confirm(
      "¿Estás seguro de que deseas eliminar el producto?"
    );

    if (confirmResult) {
      await eliminarProducto(slug);

      window.location.reload();
    }
  };

  return <button onClick={handleDelete}>Eliminar</button>;
};

export default BotonEliminar;
