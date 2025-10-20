import { createProduto, getProdutos } from "../../services/produto.service";
import { NextResponse } from "next/server";

export async function GET() {
  const produtos = await getProdutos();
  return NextResponse.json(produtos);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newProduto = await createProduto(data);
    return NextResponse.json(newProduto, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {

      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: "Ocorreu um erro inesperado." }, { status: 500 });
  }
}