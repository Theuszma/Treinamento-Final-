import { getCompraById, deleteCompra } from "../../../services/compra.service";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const compra = await getCompraById(params.id);
    if (!compra) {
      return NextResponse.json({ message: "Compra não encontrada" }, { status: 404 });
    }
    return NextResponse.json(compra);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Erro ao buscar a compra" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await deleteCompra(params.id);
    return new NextResponse(null, { status: 204 }); 
  } catch (error) {
     if (error instanceof Error) {
        return NextResponse.json({ message: error.message }, { status: 404 });
     }
     return NextResponse.json({ message: "Erro ao deletar a compra" }, { status: 500 });
  }
}