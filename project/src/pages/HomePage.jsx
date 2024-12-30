import { useProducts } from '../hooks';
import { Loading } from '../components/ui';
import { ProductCard } from '../components/products';

export default function HomePage() {
  const { products: featuredProducts, isLoading } = useProducts('featured');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-blue-600 text-white rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Loyaty</h1>
        <p className="text-xl">Discover our latest collection of clothing for everyone.</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}