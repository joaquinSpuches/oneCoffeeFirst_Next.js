import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../../../firebase/config';

export async function GET(request, {params} ) {
    const {id} = params
   
  const productosRef = doc(db, 'productos', id);
  
  const docSnapshot = await getDoc(productosRef)

  
  
  return NextResponse.json(docSnapshot.data());

  
}