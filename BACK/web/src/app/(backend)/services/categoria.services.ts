import prisma from "@/lib/prisma";
import { createCategoriaSchema, updateCategoriaSchema } from "../schemas/categoria.schema";

export const getCategorias = async () => {
  return await prisma.categorias.findMany();
};

export const getCategoriaById = async (id: string) => {
  return await prisma.categorias.findUnique({ where: { id } });
};

export const createCategoria = async (data: unknown) => {
  const validatedData = createCategoriaSchema.parse(data);
  return await prisma.categorias.create({ data: validatedData });
};

export const updateCategoria = async (id: string, data: unknown) => {
  const validatedData = updateCategoriaSchema.parse(data);
  return await prisma.categorias.update({ where: { id }, data: validatedData });
};

export const deleteCategoria = async (id: string) => {
  return await prisma.categorias.delete({ where: { id } });
};