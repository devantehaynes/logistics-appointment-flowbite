import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDownIcon } from "lucide-react";

export default function NestedTableHead() {
  return (
    <div className="h-12 dark:bg-gray-700 bg-gray-50 rounded-lg border-gray-200 p-4">
      <div className=" flex items-center justify-around uppercase [&>p]:font-bold [&>p]:text-sm [&>p]:text-gray-400">
        <p>Awb</p>
        <p>Hawb</p>
        <p>Pcs</p>
        <p>Weight (kg)</p>
      </div>
    </div>
    // <Table>
    //   <TableHeader className="h-12 dark:bg-gray-700 bg-gray-50 rounded-lg border-gray-200 p-4">
    //     <TableRow className=" flex items-center justify-around uppercase [&>p]:font-bold [&>p]:text-sm">
    //       <TableHead>Awb</TableHead>
    //       <TableHead>Hawb</TableHead>
    //       <TableHead>Pcs</TableHead>
    //       <TableHead>Weight (kg)</TableHead>
    //     </TableRow>
    //   </TableHeader>
    // </Table>
  );
}
