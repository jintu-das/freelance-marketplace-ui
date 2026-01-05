import { createFileRoute } from "@tanstack/react-router";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./-components/columns";
import { mockProjects } from "./-components/mock-data";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <DataTable columns={columns} data={mockProjects} />
    </div>
  );
}
