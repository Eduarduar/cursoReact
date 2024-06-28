import { RemoveFromCartIcon } from "./Icons.jsx";
export function CartItem ({ title, price, quantity, addToCart, reducedQuantity, removeToCart }) {
    return (
        <li className="flex flex-col items-center justify-between p-2 gap-2 bg-slate-800 rounded-lg">
            <img src="https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg" className="w-3/4" alt="Product title" />
            <div className="flex flex-col items-center justify-between w-full gap-2">
                <h3 className="text-white">{title}</h3>
                <p className="text-white">${price * quantity}</p>
                <div className="flex flex-row gap-2 items-center">
                    <p className="text-white">Quantity: {quantity}</p>
                    {
                        quantity > 1 && (
                            <button className=" p-1 px-[10px] bg-slate-700 text-white rounded-lg" onClick={reducedQuantity}>-</button>
                        )
                    }
                    <button className=" p-1 px-[10px] bg-slate-700 text-white rounded-lg" onClick={addToCart}>+</button>
                </div>
            </div>
            <button className="bg-red-500 text-white p-2 rounded-lg flex flex-row items-center" onClick={removeToCart}>
                <RemoveFromCartIcon />
                Remove Item
            </button>
        </li>
    )
}