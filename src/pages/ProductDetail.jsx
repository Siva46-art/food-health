import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import { useCartDispatch } from '../context/CartContext'

export default function ProductDetail(){
  const { id } = useParams()
  const product = products.find(p=>p.id === id)
  const [weight, setWeight] = useState(product?.weights?.[0] || '')
  const [qty, setQty] = useState(1)
  const dispatch = useCartDispatch()

  if (!product) return <div className="container py-8">Product not found</div>

  const addToCart = () => {
    dispatch({ type: 'ADD', payload: { id: product.id, name: product.name, price: product.price, weight, qty } })
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.image} alt={product.name} className="rounded shadow-md w-full" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="text-amber-700 text-xl font-bold mt-2">${product.price.toFixed(2)}</div>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-4">
            <label className="block text-sm mb-1">Weight</label>
            <select value={weight} onChange={e=>setWeight(e.target.value)} className="border rounded px-3 py-2">
              {product.weights.map(w=> <option key={w} value={w}>{w}</option>)}
            </select>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <label className="text-sm">Qty</label>
            <input type="number" value={qty} onChange={e=>setQty(Math.max(1, Number(e.target.value)))} className="w-20 border rounded px-2 py-1" />
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={addToCart} className="px-5 py-3 bg-amber-600 text-white rounded">Add to Cart</button>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {product.ingredients.map(i=> <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
