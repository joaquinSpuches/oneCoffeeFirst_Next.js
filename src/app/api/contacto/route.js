import { NextResponse } from "next/server";

export async function POST(request) {

    const fourmularioData = await request.json()
    console.log(fourmularioData);
    
    return NextResponse.json('Data recibida correctamente')
};
