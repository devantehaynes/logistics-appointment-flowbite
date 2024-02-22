import TableRowMain from "./table-row-main";
import NestedRow from "./nested-row/page";

export default function TableRow() {
  return (
    <div className="flex flex-col">
      <TableRowMain />
      <NestedRow />
    </div>
  );
}
