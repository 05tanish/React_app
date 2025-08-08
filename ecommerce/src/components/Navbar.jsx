// src/components/Navbar.jsx
import { ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="text-2xl font-bold tracking-wide text-gray-900">
          🏔️ Jolt
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium">
          <a href="#" className="hover:text-black">Categories</a>
          <a href="#" className="hover:text-black">Collections</a>
          <a href="#" className="hover:text-black">Store</a>
          <a href="#" className="hover:text-black">Blog</a>
          <a href="#" className="hover:text-black">Find Store</a>
        </nav>

        {/* Right: Icons and Login */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-black">
            <Search size={20} />
          </button>
          <button className="text-gray-700 hover:text-black">
            <ShoppingCart size={20} />
          </button>
          <button className="bg-gray-900 text-white px-4 py-1.5 rounded hover:bg-gray-700 text-sm">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
