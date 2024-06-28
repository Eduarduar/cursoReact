import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useFilter } from '../hooks/useFilter.jsx'
import { useCart } from '../hooks/useCart.jsx'

export function Products () {
    const { addToCart, removeToCart, cart } = useCart()

    
    const { filteredProducts: products } = useFilter()
    
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='container mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-6'>
            {products.map(product => {
                const inCart = checkProductInCart(product)
                return (
                    <div key={product.id} className='bg-slate-900 p-4 shadow-md w-full mx-auto'>
                        <img src='https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg' alt={product.title} className='w-full h-48 object-cover' />
                        <h2 className='text-lg font-bold text-center text-white'>{product.title}</h2>
                        <p className='text-sm text-center text-white'>${product.price}</p>
                        <button onClick={() => {inCart ? removeToCart(product) : addToCart(product)}} className={`flex items-center justify-center w-full mt-4 ${inCart ? 'bg-red-500' : 'bg-blue-500'} text-white rounded-md py-2`}>
                            {
                                inCart ? (
                                    <>
                                        <RemoveFromCartIcon />
                                        Remove from Cart
                                    </>
                                ) : (
                                    <>
                                        <AddToCartIcon />
                                        Add to Cart
                                    </>
                                )
                            }
                        </button>
                    </div>
            )})}
        </main>
    )
}