// src/components/Hero.jsx

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1617893555476-20f97d9f627c?auto=format&fit=crop&w=1950&q=80)` }}
    >
      <div className="bg-black/40 absolute inset-0"></div>

      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Jolt Sport Project</h1>
        <p className="text-lg md:text-xl mb-6">
          Introducing our latest outdoor collection—crafted for durability, comfort, and style.
        </p>
        <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
