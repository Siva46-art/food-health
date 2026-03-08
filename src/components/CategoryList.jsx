import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { key: 'Flour', label: 'Flour' },
  { key: 'Health Mix', label: 'Health Mix' },
  { key: 'Powders', label: 'Powders' }
]

export default function CategoryList(){
  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      {categories.map(c => (
        <Link key={c.key} to={`/products?category=${encodeURIComponent(c.key)}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md text-center">
          <div className="font-medium">{c.label}</div>
          <div className="text-sm text-gray-500 mt-2">Explore {c.label}</div>
        </Link>
      ))}
    </div>
  )
}
