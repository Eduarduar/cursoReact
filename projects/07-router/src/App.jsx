import { Suspense, lazy } from 'react'
import Router from './components/Router.jsx'
import Route from './components/Route.jsx'
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const SearchPage = lazy(() => import('./pages/SearchPage.jsx'))
const Page404 = lazy(() => import('./pages/Page404.jsx'))



const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
