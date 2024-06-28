import { useCallback} from 'react'

export function usePriceFilter() {

    const handleMinPriceChange = useCallback((setFilters, filters, e) => {
        const newMinPrice = parseInt(e.target.value)
        setFilters((prev) => ({ ...prev, minPrice: newMinPrice }))
        if (newMinPrice > filters.maxPrice - 1) {
            setFilters((prev) => ({ ...prev, maxPrice: newMinPrice + 1 }))
        }
    }, [])

    const handleMaxPriceChange = useCallback((setFilters, filters, e) => {
        const newMaxPrice = parseInt(e.target.value)
        setFilters((prev) => ({ ...prev, maxPrice: newMaxPrice }))
        if (newMaxPrice < filters.minPrice + 1) {
            setFilters((prev) => ({ ...prev, minPrice: newMaxPrice - 1 }))
        }
    }, [])

    return { handleMinPriceChange, handleMaxPriceChange }
}
