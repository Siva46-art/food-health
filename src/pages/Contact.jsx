import React, { useState } from 'react'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <div className="container py-8 max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="text-sm">Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} className="w-full border rounded px-3 py-2" rows={6} required />
        </div>
        <div>
          <button className="px-4 py-2 bg-amber-600 text-white rounded">Send message</button>
        </div>
      </form>

      {sent && <div className="mt-6 text-green-600">Thanks — your message has been received (mock).</div>}

      <div className="mt-8 p-4 border rounded">
        <div className="font-semibold">Business address</div>
        <div className="text-sm text-gray-600">123 Healthy St, Wellness City</div>
        <div className="mt-2">Phone: +91 8925123026</div>
        <div className="mt-2">Instagram: <a href="https://www.instagram.com/mommyoftwo_______?igsh=MXVmbHE2bHdydzFsOA==" target="_blank" rel="noopener noreferrer" className="text-amber-600">@mommyoftwo_______</a></div>
        <div className="mt-4 bg-gray-100 h-40 flex items-center justify-center text-gray-400">Google Map placeholder</div>
      </div>
    </div>
  )
}
