import prisma from "@/lib/prisma";
import { createProdutoSchema, updateProdutoSchema } from "../schemas/produto.schema";

export const getProdutos = async () => {
  return await prisma.produtos.findMany({ include: { categorias: true } });
};

export const getProdutoById = async (id: string) => {
  return await prisma.produtos.findUnique({ where: { id }, include: { categorias: true } });
};

export const createProduto = async (data: any) => {
  const validatedData = createProdutoSchema.parse(data);
  return await prisma.produtos.create({ data: validatedData });
};

export const updateProduto = async (id: string, data: any) => {
  const validatedData = updateProdutoSchema.parse(data);
  return await prisma.produtos.update({ where: { id }, data: validatedData });
};

export const deleteProduto = async (id: string) => {
  return await prisma.produtos.delete({ where: { id } });
};