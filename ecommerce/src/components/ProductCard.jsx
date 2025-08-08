// src/components/ProductCard.jsx
import { Heart } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-4 relative transition">
      {/* Wishlist icon */}
      <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
        <Heart size={18} />
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />

      {/* Name and Price */}
      <div className="mt-3">
        <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm">${product.price}</p>
      </div>
    </div>
  )
}
