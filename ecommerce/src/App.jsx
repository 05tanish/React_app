import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css' 
// ✅ Correct imports with folder and casing
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PromoSection from "./components/PromoSection";
import NewArrivals from "./components/NewArrivals";
import FeaturedCollections from "./components/FeaturedCollections";
import Newsletter from "./components/Newsletter";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import Collections from "./pages/Collections";

function App() {
  return (
     <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
