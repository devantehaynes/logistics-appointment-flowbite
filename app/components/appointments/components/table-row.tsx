import TableRowMain from "./table-row-main";
import NestedTableRow from "./nested-table-row";

export default function TableRow() {
  return (
    <div className="flex flex-col">
      <TableRowMain />
      <NestedTableRow />
    </div>
  );
}
