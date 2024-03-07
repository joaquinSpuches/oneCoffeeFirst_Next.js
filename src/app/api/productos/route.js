import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from '@/firebase/config';

export async function GET() {
  
  
  const productosRef = collection(db, 'productos');
  
  
  const q = productosRef
  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  
  return NextResponse.json(docs);

  
} 

// import { NextResponse } from "next/server";

// export async function POST(request) {

//     const fourmularioData = await request.json()
//     console.log(fourmularioData);
    
//     return NextResponse.json('Data recibida correctamente')
// };