import { useCart } from "../hooks/useCart.jsx"
import { useCartButton } from "../hooks/useCartButton.jsx"
import { ClearCartIcon, CartIcon } from "./Icons.jsx"
import { CartItem } from "./CartItem.jsx"

export function Cart () {
    const { cart, clearCart, removeToCart, addToCart, reducedQuantity } = useCart()
    const { isOpen, handleClick } = useCartButton()

    return (
        <>
            <button onClick={handleClick} className={` items-center bg-blue-500 border-[4px] ${ isOpen ? 'rounded-tr-none' : 'rounded-bl-none'}  border-slate-900 text-white rounded-full cursor-pointer flex h-10 justify-center p-1 absolute right-2 top-2 transition-all duration-500 w-10 z-[9999]`}>
                <CartIcon />
            </button>

            <aside className={`bg-slate-900 fixed h-full right-0 top-0 w-80 z-[9000] ${ isOpen ? '' : 'hidden'}`}>
                
                <div className="bg-slate-800 rounded-lg m-2 p-2 flex flex-col gap-2">
                    <h2 className="text-white font-bold text-2xl text-center">Cart</h2>
                    <div className="items-center justify-center flex flex-row">
                        <button className="bg-green-500 text-white p-2 rounded-lg flex flex-row items-center" onClick={clearCart}>
                            <ClearCartIcon />
                            Clear Cart
                        </button>
                    </div>
                </div>

                <ul className="p-2 pt-0 overflow-y-auto">
                    { 
                        cart.map(product => (
                            <CartItem key={product.id} 
                            {...product} 
                            addToCart={() => addToCart(product)} 
                            reducedQuantity={() => reducedQuantity(product)} 
                            removeToCart={() => removeToCart(product)} />
                        ))
                    }
                </ul>

            </aside>
        </>
    )
}