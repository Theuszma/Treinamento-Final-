import { getCompras, createCompra } from "../../services/compra.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const compras = await getCompras();
    return NextResponse.json(compras);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Erro ao buscar compras" }, { status: 500 });
  }
}

export async function POST(request: Request) {

  try {
    const data = await request.json(); 

    if (!data.userId || !data.produtoIds) {
      return NextResponse.json({ message: "Dados incompletos para a compra" }, { status: 400 });
    }

    const newCompra = await createCompra(data);
    return NextResponse.json(newCompra, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: "Ocorreu um erro inesperado ao criar a compra." }, { status: 500 });
  }
}