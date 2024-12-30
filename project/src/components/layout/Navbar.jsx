import { Link } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">Loyalty</span>
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/products" className="text-gray-700 hover:text-gray-900">
                All Products
              </Link>
              <Link to="/products/men" className="text-gray-700 hover:text-gray-900">
                Men
              </Link>
              <Link to="/products/women" className="text-gray-700 hover:text-gray-900">
                Women
              </Link>
              <Link to="/products/kids" className="text-gray-700 hover:text-gray-900">
                Kids
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <>
                <Link to="/admin" className="text-gray-700 hover:text-gray-900 mr-4">
                  Admin Panel
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}