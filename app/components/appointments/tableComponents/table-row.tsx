import TableRowMain from "./table-row-main";
import NestedRow from "./nested-row/nested-row";

export default function TableRow() {
  return (
    <div className="flex flex-col">
      <TableRowMain />
      <NestedRow />
    </div>
  );
}
