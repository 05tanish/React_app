// src/components/PromoSection.jsx

export default function PromoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1606813902773-bc0d4b9f5ae8?auto=format&fit=crop&w=800&q=80"
            alt="Promo Display"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Side */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Find Your Perfect Look at Jolt's Stylish New on Tokyo
          </h3>
          <p className="text-gray-600 mb-6">
            Welcome to the newest Jolt store in Shibuya, Japan! Visit and browse our full winter collection in person. Don’t miss our latest pieces and exclusive offers.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg inline-block">
            <p className="text-4xl font-extrabold text-gray-900">50%</p>
            <p className="text-gray-500 text-sm">Come and Enjoy Sale!</p>
          </div>

          <button className="mt-6 inline-block bg-black text-white px-5 py-2 text-sm font-medium rounded hover:bg-gray-800 transition">
            See On Map
          </button>
        </div>
      </div>
    </section>
  )
}
