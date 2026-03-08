import React from 'react'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'
import WhyUs from '../components/WhyUs'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

export default function Home(){
  const featured = products.slice(0,4)
  return (
    <>
      <Hero />
      <div className="container py-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map(p=> <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        <CategoryList />

        <WhyUs />
      </div>
    </>
  )
}
