import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
export const dynamic = 'force-dynamic'
export async function GET(request, { params }) {


  const productosRef = collection(db, "ventas");

  const q = productosRef
      
  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
