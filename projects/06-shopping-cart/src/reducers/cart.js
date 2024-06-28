export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_TO_CART: 'REMOVE_TO_CART',
    CLEAR_CART: 'CLEAR_CART',
    REDUCED_QUANTITY: 'REDUCED_QUANTITY'
}

// update the localStorage with the new state
export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if (productInCartIndex >= 0) {
            const newState = structuredClone(state)
            newState[productInCartIndex].quantity++
            updateLocalStorage(newState)
            return newState
        }
        else {
            const newState = [...state, { ...action.payload, quantity: 1 }]
            updateLocalStorage(newState)
            return newState
        }
    },
    [CART_ACTIONS_TYPES.REMOVE_TO_CART]: (state, action) => {
        const { id } = action.payload
        const newState =  state.filter(item => item.id !== id)
        updateLocalStorage(newState)
        return newState
    },
    [CART_ACTIONS_TYPES.CLEAR_CART]: () => {
        updateLocalStorage([])
        return []
    },
    [CART_ACTIONS_TYPES.REDUCED_QUANTITY]: (state, action) => {
        const { id } = action.payload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if (productInCartIndex >= 0) {
            const newState = structuredClone(state)
            newState[productInCartIndex].quantity--

            if (newState[productInCartIndex].quantity === 0) {
                const newState = state.filter(item => item.id !== id)
                updateLocalStorage(newState)
                return newState
            }
            else {
                updateLocalStorage(newState)
                return newState
            }
        }
    }
}

export const cartReducer = (state, action) => {
    const { type: actionType} = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state, action) : state
}