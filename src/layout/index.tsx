import { Outlet } from '@tanstack/react-router'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/layout/app-sidebar'
import { SiteHeader } from '@/layout/site-header'

export const iframeHeight = '800px'

export const description = 'A sidebar with a header and a search form.'

export default function Layout() {
  return (
    <div className="[--header-height:calc(--spacing(15))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <Outlet />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
