import { Suspense } from 'react'
import { lazy } from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import Layout from '@/layout'
export const Route = createRootRoute({
  component: RootComponent
})
const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/react-router-devtools').then(res => ({
          default: res.TanStackRouterDevtools
        }))
      )
function RootComponent() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="rsbuild-ui-theme">
        <Layout />
      </ThemeProvider>
      {/* <Outlet /> */}
      <Toaster />
      <Suspense>
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
    </>
  )
}
