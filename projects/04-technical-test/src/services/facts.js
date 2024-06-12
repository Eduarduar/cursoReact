import { CAT_ENDPOINT_RANDOM_FACT } from '../utils/constants.js'

export const getCatFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
