import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Signup(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { signup } = useAuth()

  const submit = async e => {
    e.preventDefault()
    setError(null)
    if (password !== confirm) return setError('Passwords do not match')
    try{
      await signup({ name, email, password })
      navigate('/')
    }catch(err){ setError(err.message) }
  }

  return (
    <div className="container py-8 max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Create account</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="text-sm">Full name</label>
          <input required value={name} onChange={e=>setName(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input required value={email} onChange={e=>setEmail(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <input required value={password} onChange={e=>setPassword(e.target.value)} type="password" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Confirm password</label>
          <input required value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" className="w-full border rounded px-3 py-2" />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div>
          <button type="submit" className="px-4 py-2 bg-amber-600 text-white rounded">Sign up</button>
        </div>
      </form>
    </div>
  )
}
