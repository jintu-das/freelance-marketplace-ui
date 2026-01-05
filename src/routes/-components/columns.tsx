import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Project = {
  id: string;
  clientName: string;
  email: string;
  category: "web" | "mobile" | "ui_ux";
  priority: "low" | "medium" | "high";
  status: "pending" | "in_progress" | "completed" | "cancelled";
  createdDate: string;
};

const categoryLabels: Record<Project["category"], string> = {
  web: "Web Development",
  mobile: "Mobile App",
  ui_ux: "UI/UX Design",
};

const priorityVariants: Record<
  Project["priority"],
  "default" | "secondary" | "destructive"
> = {
  low: "secondary",
  medium: "default",
  high: "destructive",
};

const statusVariants: Record<
  Project["status"],
  "default" | "secondary" | "destructive" | "outline"
> = {
  pending: "outline",
  in_progress: "default",
  completed: "secondary",
  cancelled: "destructive",
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("clientName")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Project["status"];
      const label = status.replace("_", " ");
      return (
        <Badge variant={statusVariants[status]} className="capitalize">
          {label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Type",
    cell: ({ row }) => {
      const category = row.getValue("category") as Project["category"];
      return <div>{categoryLabels[category]}</div>;
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as Project["priority"];
      return (
        <Badge variant={priorityVariants[priority]} className="capitalize">
          {priority}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdDate",
    header: "Created Date",
    cell: ({ row }) => {
      const date = row.getValue("createdDate") as string;
      return <div>{new Date(date).toLocaleDateString()}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const project = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(project.id)}
            >
              Copy project ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit project</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Delete project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
