import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const RootLayout = () => (
  <SidebarProvider>
    <AppSidebar />
    <main className="w-full">
      <header className="flex items-center gap-2 border-b bg-background p-4">
        <SidebarTrigger />
        <span className="font-semibold">Freelance Marketplace</span>
      </header>
      <div className="p-4">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </main>
  </SidebarProvider>
);

export const Route = createRootRoute({ component: RootLayout });
