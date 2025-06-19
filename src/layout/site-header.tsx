import { Link } from '@tanstack/react-router'
import { Command, SidebarIcon } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center border-b bg-[#121432]">
        <div className="flex h-(--header-height) w-full items-center px-5">
          <div className="flex flex-1 gap-4">
            <Link to="/" className="flex gap-2">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-white">
                <Command className="size-4 text-red-500" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight text-white">
                <span className="truncate font-medium">Acme Inc</span>
                <span className="truncate text-xs">Enterprise</span>
              </div>
            </Link>
            <Button
              className="size-8 bg-white text-black"
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
            >
              <SidebarIcon />
            </Button>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="h-(--header-height)"></div>
    </>
  )
}
