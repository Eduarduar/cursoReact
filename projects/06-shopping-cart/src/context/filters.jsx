import { createContext, useState} from "react"
import PropTypes from "prop-types"

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
  const [ filters, setFilters ] = useState({
    name: '',
    category: 'all',
    minPrice: 150,
    maxPrice: 2000
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters}}>
      {children}
    </FiltersContext.Provider>
  )
}

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired
}