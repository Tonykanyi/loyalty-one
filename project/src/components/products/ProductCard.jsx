import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

export default function ProductCard({ product }) {
  const { id, name, category, quantity, rating, image } = product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{category}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < rating ? 'text-yellow-400' : 'text-gray-300'
              } w-4 h-4`}
            />
          ))}
        </div>
        <p className="mt-2 text-sm">
          {quantity > 0 ? `${quantity} in stock` : 'Out of stock'}
        </p>
        <Link
          to={`/product/${id}`}
          className="mt-4 block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}