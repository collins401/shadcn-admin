import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

import './app.css'

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true
  // defaultNotFoundComponent: () => <NotFound />,
  // defaultPendingComponent: () => <Loading />,
  // defaultErrorComponent: () => <NotFound />
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
  interface StaticDataRouteOption {
    title?: string
  }
}

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl!)
  root.render(<RouterProvider router={router} />)
}
