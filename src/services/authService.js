// Mock auth service for future Firebase integration
export async function login({ email, password }) {
  if (!email || !password) throw new Error('Missing fields')
  if (password.length < 6) throw new Error('Password too short')
  return { id: 'user-1', name: 'Demo User', email }
}

export async function signup({ name, email, password }) {
  if (!name || !email || !password) throw new Error('Missing fields')
  return { id: 'user-1', name, email }
}
