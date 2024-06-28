import { useState, useCallback} from 'react';
export function useCategoryFilter() {
    const [category, setCategory] = useState('all')

    const handleCategory = useCallback((e, setFilter) => {
        setFilter((prev) => ({ ...prev, category: e.target.value }))
        setCategory(e.target.value);
    }, [])

    return { category, handleCategory }
}