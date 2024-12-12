import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function DashboardJobFilter() {
  return (
    <Button variant={"secondary"}>
      <Filter />
      Filter
    </Button>
  );
}
