import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="m-4 bg-background p-5">
      Hello "/"!
      <Input />
      <Button>asd</Button>
    </div>
  )
}
