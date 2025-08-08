// src/components/FeaturedCollections.jsx

const collections = [
  {
    title: 'Footwear',
    image: 'https://images.unsplash.com/photo-1606818273338-228f47e5012d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Jackets',
    image: 'https://images.unsplash.com/photo-1618354691373-0e5e8d25fd3f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1621264434503-c3dc6354a566?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Headwear',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155222f267?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1589987601633-4997d449ccdd?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Backpacks',
    image: 'https://images.unsplash.com/photo-1506277886982-94a13dd52b15?auto=format&fit=crop&w=600&q=80',
  },
]

export default function FeaturedCollections() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Featured Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {collections.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
