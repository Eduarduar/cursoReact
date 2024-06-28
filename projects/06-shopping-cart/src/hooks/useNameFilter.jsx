import { useState, useCallback } from 'react';
export function useNameFilter() {
    const [name, setName] = useState('');
    const handleName = useCallback((e, handleFilter) => {
        handleFilter((prev) => ({ ...prev, name: e.target.value }))
        setName(e.target.value);
    }, []);

    return { name, handleName }
}