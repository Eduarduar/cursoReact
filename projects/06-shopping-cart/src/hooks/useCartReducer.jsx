import { useReducer } from "react"
import { cartInitialState, cartReducer, CART_ACTIONS_TYPES } from "../reducers/cart.js"

export function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({ type: CART_ACTIONS_TYPES .ADD_TO_CART, payload: product })
    const removeToCart = product => dispatch({ type: CART_ACTIONS_TYPES.REMOVE_TO_CART, payload: product })
    const clearCart = () => dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CART })
    const reducedQuantity = product => dispatch({ type: CART_ACTIONS_TYPES.REDUCED_QUANTITY, payload: product })

    return [state, addToCart, removeToCart, reducedQuantity, clearCart ]
}
