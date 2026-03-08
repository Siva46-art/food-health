import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

const Home = lazy(()=> import('./pages/Home'))
const Products = lazy(()=> import('./pages/Products'))
const ProductDetail = lazy(()=> import('./pages/ProductDetail'))
const Cart = lazy(()=> import('./pages/Cart'))
const Login = lazy(()=> import('./pages/Login'))
const Signup = lazy(()=> import('./pages/Signup'))
const Contact = lazy(()=> import('./pages/Contact'))
const NotFound = lazy(()=> import('./pages/NotFound'))

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
