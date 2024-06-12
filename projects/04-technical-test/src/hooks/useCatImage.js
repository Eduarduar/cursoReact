import { useState, useEffect } from 'react'
import { getCatImage } from '../services/imagesCats.js'

export function useCatImage ({ fact }) {
  const [urlCat, setUrlCat] = useState()

  useEffect(() => {
    if (!fact) return
    const words = fact.split(' ', 3).join(' ')
    getCatImage(words).then(newImage => setUrlCat(newImage))
  }, [fact])

  return { urlCat }
}
