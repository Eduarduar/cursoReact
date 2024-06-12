import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { urlCat } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main className='flex flex-col container mx-auto h-screen max-h-screen gap-4 justify-center items-center'>
      <h1 className='text-4xl text-center'>Aplicacion de gatos</h1>
      <button onClick={handleClick} className='bg-blue-500 rounded-xl text-white hover:bg-blue-600 p-3'>Get new fact</button>
      {fact && <p className='text-2xl text-center'>{fact}</p>}
      {urlCat && <img src={`${urlCat}`} className='mx-auto max-h-[75%]' alt='image extracted from cat fact' />}
    </main>
  )
}

export default App
