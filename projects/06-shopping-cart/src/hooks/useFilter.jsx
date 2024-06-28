import { products as inicialProducts } from '../mocks/products.json'
import { useState, useCallback, useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilter() {
    const [ products ] = useState(inicialProducts)
    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = useCallback((products, filters) => {
      return products.filter(product => {
        return (
            product.price >= filters.minPrice &&
            product.price <= filters.maxPrice &&
            ( filters.name === '' || product.title.toLowerCase().includes(filters.name.toLowerCase()) ) &&
            ( filters.category === 'all' || product.category === filters.category )
          )
        }
      )
    }, [])
    
    const filteredProducts = filterProducts(products, filters)

    return { filters, setFilters, filteredProducts }
}