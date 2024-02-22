import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function NestedRowTableRow() {
  return (
    <div className="[&>*]:text-black  [&>*]:dark:text-white [&>*]:font-semibold">
      <Table className="">
        <TableBody>
          <TableRow className="">
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
          </TableRow>
          <TableRow className="border-b">
            <TableCell></TableCell>
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
          </TableRow>
          <TableRow className="border-b">
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
