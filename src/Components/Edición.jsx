'use client'
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const categorias = ["Blend", "Origen", "Accesorios"];

const editarProducto = async function (slug, titulo, precio, categoria, descripcion) {
  try {
    const docRef = doc(db, "productos",slug);
    await updateDoc(docRef, {
      titulo: titulo,
      precio: precio,
      categoria: categoria,
      descripcion: descripcion 
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
  const [precio, setPrecio] = useState(producto.precio);
  const [categoria, setCategoria] = useState(producto.categoria);
  const [descripcion, setDescripcion] = useState(producto.descripcion);

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmResult = window.confirm("¿Estás seguro de que deseas actualizar el producto?" );
    
    if (confirmResult) {
      const updated = await editarProducto(producto.slug, titulo, precio, categoria, descripcion);
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
          type="text"
          id="precio"
          className="text-gray-400"
          name="price"
          placeholder={producto.precio}
          value={precio}
          onChange={handlePrecioChange}
        />
      </div>
      <div>
        <label htmlFor="categoria">Categoría:</label>
        <select
          id="categoria"
          className="text-gray-400"
          name="category"
          value={categoria}
          onChange={handleCategoriaChange}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
      
          id="descripcion"
          className="text-gray-400 w-full"
          name="description"
          placeholder={producto.descripcion}
          value={descripcion}
          onChange={handleDescripcionChange}
          
        />
      </div>
      <button type="submit">Guardar Cambios</button>
    </form>
  );
}
