import { usePriceFilter } from '../../hooks/usePriceFilter.jsx'
import { useFilter } from '../../hooks/useFilter.jsx'
import { useId } from 'react'

export function Price() {
    const { setFilters, filters } = useFilter()
    const { handleMinPriceChange, handleMaxPriceChange } = usePriceFilter({ setFilters, filters })
    // create id's for the labels and inputs
    const minPriceId = useId()
    const maxPriceId = useId()

    return (
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 bg-slate-900 p-4 rounded-lg">
            <h2 className="text-white font-bold text-xl"> Price </h2>
            <div className='flex flex-col gap-1 w-full justify-center'>
                <label htmlFor={minPriceId} className="text-white text-lg">Min price: {filters.minPrice} </label>
                <input onChange={(e) => {handleMinPriceChange(setFilters, filters, e)}} value={filters.minPrice} type="range" id="minPrice" min='0' max='9998' />
            </div>
            <div className='flex flex-col gap-1 w-full justify-center'>
                <label htmlFor={maxPriceId} className="text-white text-lg">Max price: {filters.maxPrice} </label>
                <input onChange={(e) => {handleMaxPriceChange(setFilters, filters, e)}} value={filters.maxPrice} type="range" id="maxPrice" min='1' max='9999' />
            </div>
        </div>
    )
}