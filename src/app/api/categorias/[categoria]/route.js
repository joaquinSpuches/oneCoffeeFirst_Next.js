import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebase/config";

export async function GET(request, { params }) {
  const { categoria } = params;

  const productosRef = collection(db, "productos");

  const q =
    categoria === "Todos"
      ? productosRef
      : query(productosRef, where("categoria", "==", categoria));
  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
