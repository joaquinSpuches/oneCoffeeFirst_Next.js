import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/config";

export async function GET(request, { params }) {
  const productosRef = collection(db, "ventas");

  const q = productosRef;

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
