import React from 'react'
import { useCart, useCartDispatch } from '../context/CartContext'

export default function Cart(){
  const { items } = useCart()
  const dispatch = useCartDispatch()

  const updateQty = (item, qty) => dispatch({ type: 'UPDATE', payload: { id: item.id, weight: item.weight, qty } })
  const remove = item => dispatch({ type: 'REMOVE', payload: { id: item.id, weight: item.weight } })

  const subtotal = items.reduce((s,i) => s + (i.price * i.qty), 0)

  const handleCheckout = () => {
    if (items.length === 0) return;

    let text = "Hello, I would like to place an order:\n\n";
    items.forEach((item, index) => {
      text += `${index + 1}. ${item.name} (${item.weight}) x ${item.qty} - $${(item.price * item.qty).toFixed(2)}\n`;
    });
    text += `\n*Subtotal: $${subtotal.toFixed(2)}*`;

    const encodedText = encodeURIComponent(text);
    const phoneNumber = "918925123026"; // Adding country code 91 for India as an assumption for the 10-digit number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container py-8">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <div className="text-gray-600">Your cart is empty.</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {items.map(item=> (
              <div key={item.id + '-' + item.weight} className="flex items-center gap-4 p-4 border rounded">
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.weight}</div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="number" value={item.qty} onChange={e=>updateQty(item, Math.max(1, Number(e.target.value)))} className="w-20 border rounded px-2 py-1" />
                  <div className="font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                  <button onClick={()=>remove(item)} className="text-sm text-red-600">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border rounded">
            <div className="font-semibold">Order Summary</div>
            <div className="mt-2 flex items-center justify-between"><div>Subtotal</div><div className="font-semibold">${subtotal.toFixed(2)}</div></div>
            <div className="mt-4">
              <button onClick={handleCheckout} className="w-full bg-amber-600 text-white py-2 rounded">Checkout via WhatsApp</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
