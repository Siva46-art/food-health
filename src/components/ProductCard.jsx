import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }){
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col">
      <Link to={`/products/${product.id}`} className="block">
        <img src={product.image} alt={product.name} className="w-full h-44 object-cover rounded-md" />
        <h3 className="mt-3 font-semibold">{product.name}</h3>
        <div className="text-sm text-gray-500">{product.category}</div>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-amber-700 font-semibold">${product.price.toFixed(2)}</div>
          <div className="text-xs text-gray-500">{product.weights[0]}</div>
        </div>
      </Link>
    </div>
  )
}
