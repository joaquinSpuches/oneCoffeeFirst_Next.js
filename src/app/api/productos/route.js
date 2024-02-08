import { NextResponse } from "next/server";
import mockData from "../../../../data/productos";
import { revalidateTag, revalidatePath } from "next/cache";

const sleep = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};
export async function GET() {
  return NextResponse.json(mockData);
}
