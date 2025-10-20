import { z } from "zod";

export const createProdutoSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  descricao: z.string().min(1, "Descrição é obrigatória"),
  preco: z.number().positive("Preço deve ser um número positivo"),
  categoriaIds: z.array(z.string()).optional(),
});

export const updateProdutoSchema = createProdutoSchema.partial();