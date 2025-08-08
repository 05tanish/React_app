// src/pages/Home.jsx
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import PromoSection from '../components/PromoSection'
import FeaturedCollections from '../components/FeaturedCollections'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <PromoSection />
      <FeaturedCollections />
      <Newsletter />
    </>
  )
}
