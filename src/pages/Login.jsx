import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const submit = async e => {
    e.preventDefault()
    setError(null)
    try{
      await login({ email, password })
      navigate('/')
    }catch(err){ setError(err.message) }
  }

  return (
    <div className="container py-8 max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="text-sm">Email</label>
          <input required value={email} onChange={e=>setEmail(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <input required value={password} onChange={e=>setPassword(e.target.value)} type="password" className="w-full border rounded px-3 py-2" />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex items-center justify-between">
          <label className="text-sm"><input type="checkbox" className="mr-2" /> Remember me</label>
          <button type="submit" className="px-4 py-2 bg-amber-600 text-white rounded">Sign in</button>
        </div>
      </form>
    </div>
  )
}
