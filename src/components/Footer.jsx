import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-semibold">Healthy Food</div>
          <div className="text-sm text-gray-500">Pure Ingredients • Premium Quality</div>
        </div>
        <div className="text-sm text-gray-600">
          <div>Address: 123 Healthy St, Wellness City</div>
          <div>Phone: +1 (555) 123-4567</div>
          <div>Email: contact@healthyfood.example</div>
        </div>
        <div className="text-sm text-gray-600">
          <div className="font-medium">Quick Links</div>
          <div>Home • Products • Contact</div>
        </div>
      </div>
    </footer>
  )
}
