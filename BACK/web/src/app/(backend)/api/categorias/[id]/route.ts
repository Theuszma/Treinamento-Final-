import { getCategoriaById, updateCategoria, deleteCategoria } from "../../../services/categoria.services";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const categoria = await getCategoriaById(params.id);
  if (!categoria) {
    return NextResponse.json({ message: "Categoria não encontrada" }, { status: 404 });
  }
  return NextResponse.json(categoria);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    const updatedCategoria = await updateCategoria(params.id, data);
    return NextResponse.json(updatedCategoria);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: "Ocorreu um erro desconhecido" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await deleteCategoria(params.id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
     return NextResponse.json({ message: "Erro ao deletar categoria" }, { status: 500 });
  }
}