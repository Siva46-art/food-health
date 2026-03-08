import React, { createContext, useContext, useEffect, useReducer } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const initialState = {
  items: JSON.parse(localStorage.getItem('cart_items') || '[]')
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.payload.id && i.weight === action.payload.weight)
      let items
      if (existing) {
        items = state.items.map(i => i === existing ? { ...i, qty: i.qty + action.payload.qty } : i)
      } else {
        items = [...state.items, action.payload]
      }
      return { ...state, items }
    }
    case 'UPDATE': {
      const items = state.items.map(i => i.id === action.payload.id && i.weight === action.payload.weight ? { ...i, qty: action.payload.qty } : i)
      return { ...state, items }
    }
    case 'REMOVE': {
      const items = state.items.filter(i => !(i.id === action.payload.id && i.weight === action.payload.weight))
      return { ...state, items }
    }
    case 'CLEAR':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart_items', JSON.stringify(state.items))
  }, [state.items])

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export function useCart() {
  return useContext(CartStateContext)
}

export function useCartDispatch() {
  return useContext(CartDispatchContext)
}
