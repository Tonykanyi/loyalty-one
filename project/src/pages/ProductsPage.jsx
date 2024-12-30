import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks';
import { CategoryFilter, ProductGrid } from '../components/products';
import { Loading } from '../components/ui';

export default function ProductsPage() {
  const { category } = useParams();
  const { products, isLoading } = useProducts(category);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}'s Clothing` : 'All Products'}
      </h1>
      
      <CategoryFilter />
      <ProductGrid products={products} />
    </div>
  );
}