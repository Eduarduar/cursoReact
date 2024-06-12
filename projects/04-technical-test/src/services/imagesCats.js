import { CAT_IMAGE_URL } from '../utils/constants.js'

export const getCatImage = async (words) => {
  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${words}?size=50&color=red&json=true`
  const res = await fetch(CAT_ENDPOINT_IMAGE_URL)
  const data = await res.json()
  const { _id } = data
  const url = `${CAT_IMAGE_URL}/cat/${_id}/says/${words}`
  return url
}
