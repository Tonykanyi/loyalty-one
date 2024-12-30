import { CATEGORIES } from '../../config/constants';
import { Link, useParams } from 'react-router-dom';

export default function CategoryFilter() {
  const { category } = useParams();

  return (
    <div className="flex space-x-4 mb-8">
      <Link
        to="/products"
        className={`px-4 py-2 rounded-md ${
          !category ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        All
      </Link>
      {Object.entries(CATEGORIES).map(([key, value]) => (
        <Link
          key={key}
          to={`/products/${value}`}
          className={`px-4 py-2 rounded-md ${
            category === value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {key.charAt(0) + key.slice(1).toLowerCase()}
        </Link>
      ))}
    </div>
  );
}