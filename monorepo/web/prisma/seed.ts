import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpa as coleções antes de inserir
  await prisma.produto.deleteMany({});
  await prisma.categoria.deleteMany({});

  // Cria uma categoria
  const novaCategoria = await prisma.categoria.create({
    data: {
      nome: 'Eletrônicos',
    },
  });

  // Cria um produto vinculado a essa categoria
  const novoProduto = await prisma.produto.create({
    data: {
      nome: 'Notebook',
      descricao: 'Notebook de alto desempenho',
      preco: 4500.0,
      categoriaId: novaCategoria.id,
    },
  });

  // Atualiza a categoria com a lista de produtos (relacionamento inverso)
  await prisma.categoria.update({
    where: { id: novaCategoria.id },
    data: {
      produtos: {
        connect: { id: novoProduto.id },
      },
    },
  });

  console.log('Seed executado com sucesso ✅');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
