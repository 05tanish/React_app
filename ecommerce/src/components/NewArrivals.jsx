
import ProductCard from './ProductCard'

const products = [
  {
    name: 'Carabiner Set',
    price: '12.00',
    image: 'https://images.unsplash.com/photo-1621264434503-c3dc6354a566?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Jung Bag',
    price: '32.00',
    image: 'https://images.unsplash.com/photo-1618354691373-0e5e8d25fd3f?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Thermos Mug',
    price: '13.00',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Puffer Vest',
    price: '120.00',
    image: 'https://images.unsplash.com/photo-1625684993082-8168d7133b8e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Travel Chair',
    price: '28.00',
    image: 'https://images.unsplash.com/photo-1603899584428-14b9e4eb3b52?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Cap',
    price: '49.00',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155222f267?auto=format&fit=crop&w=600&q=80',
  },
]

export default function NewArrivals() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8 text-gray-900">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
