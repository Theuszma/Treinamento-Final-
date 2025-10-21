import prisma from "@/app/(backend)/services/db";
import { createCompraSchema } from "@/app/(backend)/schemas/compra.schema";

export const getCompras = async () => {
  return await prisma.compras.findMany({ include: { user: true, produtos: true } });
};

export const getCompraById = async (id: string) => {
  return await prisma.compras.findUnique({ where: { id }, include: { user: true, produtos: true } });
};

export const createCompra = async (data: unknown) => {
  const validatedData = createCompraSchema.parse(data);

  const produtos = await prisma.produtos.findMany({
    where: {
      id: { in: validatedData.produtoIds },
    },
  });

  if (produtos.length !== validatedData.produtoIds.length) {
    throw new Error("Um ou mais produtos não foram encontrados");
  }

  const precoTotal = produtos.reduce((total, produto) => total + produto.preco, 0);

  return await prisma.compras.create({
    data: {
      userId: validatedData.userId,
      produtoIds: validatedData.produtoIds,
      precoTotal: precoTotal,
    },
  });
};

export const deleteCompra = async (id: string) => {
  return await prisma.compras.delete({ where: { id } });
};