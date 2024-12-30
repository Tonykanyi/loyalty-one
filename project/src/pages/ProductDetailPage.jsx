import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../api/products';
import Loading from '../components/ui/Loading';
import Rating from '../components/ui/Rating';
import Badge from '../components/ui/Badge';
import { formatStockStatus } from '../utils/formatting';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery(
    ['product', id],
    () => fetchProduct(id)
  );

  if (isLoading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <div className="flex items-center space-x-4">
            <Badge variant="primary">{product.category}</Badge>
            <Badge 
              variant={product.quantity > 0 ? 'success' : 'danger'}
            >
              {formatStockStatus(product.quantity)}
            </Badge>
          </div>
          
          <Rating value={product.rating} />
          
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-gray-500">Category</dt>
                <dd className="text-gray-900">{product.category}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Stock</dt>
                <dd className="text-gray-900">{product.quantity} units</dd>
              </div>
            </dl>
          </div>
          
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Contact Store</h2>
            <p className="text-gray-600 mb-4">
              Have questions about this product? Contact our customer service.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}