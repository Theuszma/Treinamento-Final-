import { getCategorias, createCategoria } from "../../services/categoria.services";
import { NextResponse } from "next/server";

export async function GET() {
  const categorias = await getCategorias();
  return NextResponse.json(categorias);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newCategoria = await createCategoria(data);
    return NextResponse.json(newCategoria, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: "Ocorreu um erro desconhecido" }, { status: 500 });
  }
}