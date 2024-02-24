'use client'

import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const editarProducto = async function (id, titulo, precio) {
  try {
    const docRef = doc(db, "productos", id.toString());
    await updateDoc(docRef, {
      titulo: titulo,
      precio: precio // Asegúrate de tener un campo "precio" en tu base de datos
    });
    return true; // Éxito en la actualización
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    return false; // Falla en la actualización
  }
};

export default function Edición(params) {
  const producto = params.producto;
  const [titulo, setTitulo] = useState(producto.titulo);
  const [precio, setPrecio] = useState(producto.precio); // Agregar estado para el precio

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmResult = window.confirm("¿Estás seguro de que deseas actualizar el nombre y el precio del producto?" );
    
    if (confirmResult) {
      const updated = await editarProducto(producto.id, titulo, precio);
      if (updated) {
        window.location.href = "/Perfil/Admin/editar";
      } else {
        alert("Error al actualizar el producto.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} id="editProductForm">
      <div>
        <label htmlFor="titulo">Nombre del Producto:</label>
        <input
          type="text"
          id="titulo"
          className="text-gray-400"
          name="productName"
          placeholder={producto.titulo}
          value={titulo}
          onChange={handleTituloChange}
        />
      </div>
      <div>
        <label htmlFor="precio">Precio:</label>
        <input
          type="text  "
          id="precio"
          className="text-gray-400"
          name="price"
          placeholder={producto.precio}
          value={precio}
          onChange={handlePrecioChange}
        />
      </div>
      <button type="submit">Guardar Cambios</button>
    </form>
  );
}
