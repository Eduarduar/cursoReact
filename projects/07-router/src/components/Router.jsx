import { useEffect, useState, Children } from 'react'
import { EVENTS } from '../utils/constants.js'
import { match } from 'path-to-regexp'
import { getCurrentPath } from '../utils/utils.js'

// eslint-disable-next-line react/prop-types
export default function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1 className='text-white text-center w-full font-bold'>404</h1>}) {
  const [ currentPath, setCurrentPath ] = useState(getCurrentPath())
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath())
      }
  
      window.addEventListener(EVENTS.PUSH_STATE, onLocationChange)
      window.addEventListener(EVENTS.POP_STATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSH_STATE, onLocationChange)
        window.removeEventListener(EVENTS.POP_STATE, onLocationChange)
      }
    }, [])
  
    let routeParams = {}

    // add routes from children <Route /> components
    const routesFromChildren = Children.map(children, ({ props, type }) => {
      const { name } = type
      const isRoute = name === 'Route'
      return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    const Page = routesToUse.find(({ path }) => {
      if (path === currentPath) return true

      const matchUrl = match(path, {decode: decodeURIComponent})
      const marched = matchUrl(currentPath)
      if (!marched) return false
      routeParams = marched.params

      // // ahora obtendremos los parametros que se pasan por la url con ?parametro=valor
      // const searchParams = new URLSearchParams(window.location.search)
      // const searchParamsObject = Object.fromEntries(searchParams)
      // routeParams = {
      //   ...routeParams,
      //   ...searchParamsObject
      // }

      return true
      }
    )?.Component

    return Page 
    ? <Page routeParams={routeParams}/> 
    : <DefaultComponent/>
  }