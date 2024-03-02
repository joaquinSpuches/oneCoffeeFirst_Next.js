"use client";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
const BotonEliminar = async function ({ id }) {
 
  const eliminarProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id.toString()));
  };
  const handleDelete = async (e) => {
    e.preventDefault();

    const confirmResult = window.confirm(
      "¿Estás seguro de que deseas eliminar el producto?"
    );

    if (confirmResult) {
      await eliminarProducto(id);

      window.location.href = "/Perfil/Admin/editar";
    }
  };

  return <button onClick={handleDelete}>Eliminar</button>;
};

export default BotonEliminar;
