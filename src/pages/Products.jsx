import React, { useMemo, useState } from 'react'
import productsData from '../data/products'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'

export default function Products(){
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const category = searchParams.get('category') || ''

  const filtered = useMemo(()=>{
    return productsData.filter(p=>{
      if (category && p.category !== category) return false
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false
      return true
    })
  }, [category, query])

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold">Products</h2>
        <div className="flex gap-2">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..." className="border rounded px-3 py-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
