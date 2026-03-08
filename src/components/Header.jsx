import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const { items } = useCart()
  const { user, logout } = useAuth()

  const totalQty = items.reduce((s, i) => s + (i.qty || 1), 0)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center font-bold text-amber-700">HF</div>
          <div>
            <div className="font-semibold">Healthy Food</div>
            <div className="text-xs text-gray-500">Pure Ingredients</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({isActive})=> isActive? 'text-amber-600':'text-gray-700'}>Home</NavLink>
          <NavLink to="/products" className={({isActive})=> isActive? 'text-amber-600':'text-gray-700'}>Products</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive? 'text-amber-600':'text-gray-700'}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="text-sm">Hi, {user.name}</div>
              <button onClick={logout} className="text-sm text-gray-600">Sign out</button>
            </div>
          ) : (
            <Link to="/login" className="text-sm text-gray-700">Sign in</Link>
          )}

          <Link to="/cart" className="relative">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700">🛒</div>
            {totalQty > 0 && <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalQty}</span>}
          </Link>
        </div>
      </div>
    </header>
  )
}
