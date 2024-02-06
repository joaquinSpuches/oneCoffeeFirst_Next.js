import { NextResponse } from "next/server";
import mockData from '../../../../data/productos'

const sleep = (timer)=>{
    return new Promise ((resolve)=>setTimeout(resolve, timer))
}
export async function GET(){
    await sleep(1000)
    return NextResponse.json(mockData)
}