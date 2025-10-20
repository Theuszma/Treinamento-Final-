// src/components/ListaProdutos.tsx

import { products } from '@/data/products';
import ProdutoCard from './ProdutoCard';

export default function ListaProdutos() {
  console.log('Produtos carregados em ListaProdutos:', products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProdutoCard key={product.id} product={product} />
      ))}
    </div>
  );
}