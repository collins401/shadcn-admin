import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/p/history')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/p/history"!</div>
}
