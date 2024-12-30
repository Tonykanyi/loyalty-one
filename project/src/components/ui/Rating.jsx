import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Rating({ value, max = 5 }) {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-400 w-5 h-5" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 w-5 h-5" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-yellow-400 w-5 h-5" />
      ))}
      <span className="ml-2 text-gray-600">{value.toFixed(1)}</span>
    </div>
  );
}