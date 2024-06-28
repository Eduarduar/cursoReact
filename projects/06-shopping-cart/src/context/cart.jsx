import { createContext} from "react"
import { useCartReducer } from "../hooks/useCartReducer"

export const CartContext = createContext()


export function CartProvider ({ children }) {
    const [state, addToCart, removeToCart, reducedQuantity, clearCart] = useCartReducer()

    return (
        <CartContext.Provider value={{ cart: state, addToCart, removeToCart, reducedQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}