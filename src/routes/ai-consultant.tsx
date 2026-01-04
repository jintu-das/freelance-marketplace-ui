import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-consultant")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/ai-consultant"!</div>;
}
