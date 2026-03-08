import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const mockUser = JSON.parse(localStorage.getItem('mock_user') || 'null')

export function AuthProvider({ children }) {
  const [user, setUser] = useState(mockUser)

  useEffect(() => {
    localStorage.setItem('mock_user', JSON.stringify(user))
  }, [user])

  const login = async ({ email, password }) => {
    // mock: accept any password >= 6
    if (!email || !password || password.length < 6) throw new Error('Invalid credentials')
    const u = { id: 'user-1', name: 'Demo User', email }
    setUser(u)
    return u
  }

  const signup = async ({ name, email, password }) => {
    if (!name || !email || !password) throw new Error('Invalid data')
    const u = { id: 'user-1', name, email }
    setUser(u)
    return u
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
