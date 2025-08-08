// src/components/Footer.jsx

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-start">
        
        {/* Left: Branding */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Jolt</h3>
          <p className="text-sm text-gray-400">
            &copy; {year} Jolt Sport. All rights reserved.
          </p>
        </div>

        {/* Right: Quick Links */}
        <div className="flex flex-wrap gap-6 md:justify-end">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">Support</a>
        </div>
      </div>
    </footer>
  )
}
