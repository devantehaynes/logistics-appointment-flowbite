"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-row-actions";
// import { DataTableRowActions } from "./data-table-row-actions";
import { DataTableColumnHeader } from "./data-column-header";
import { statuses } from "../data/data";
import { HTMLProps, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Appointment = {
  id: string;
  createdAt: string;
  location: string;
  time: string;
  type: string;
  // type: "pickUp" | "dropOff" | "container/drayage" | "missingPieces" ;
  docs: string;
  status: "pending" | "approved" | "processing" | "completed" | "denied";
};

export const columns: ColumnDef<Appointment>[] = [
  // TODO maybe change to this example https://tanstack.com/table/v8/docs/framework/react/examples/expanding
  // {
  //   accessorKey: "id",
  //   header: ({ table }) => (
  //     <div className=" flex items-center space-x-2">
  //       <IndeterminateCheckbox
  //         {...{
  //           checked: table.getIsAllRowsSelected(),
  //           indeterminate: table.getIsSomeRowsSelected(),
  //           onChange: table.getToggleAllRowsSelectedHandler(),
  //         }}
  //       />
  //       <button
  //         {...{
  //           onClick: table.getToggleAllRowsExpandedHandler(),
  //         }}
  //       >
  //         {table.getIsAllRowsExpanded() ? (
  //           <ChevronUpIcon className="text-gray-500 dark:text-gray-400 w-6 h-6" />
  //         ) : (
  //           <ChevronDownIcon className="text-gray-500 dark:text-gray-400 w-6 h-6" />
  //         )}
  //       </button>
  //       <p>Appointment ID</p>
  //     </div>
  //   ),
  //   cell: ({ row, getValue }) => (
  //     <div className=" flex items-center space-x-2">
  //       <>
  //         <IndeterminateCheckbox
  //           {...{
  //             checked: row.getIsSelected(),
  //             indeterminate: row.getIsSomeSelected(),
  //             onChange: row.getToggleSelectedHandler(),
  //           }}
  //           className="mr-2"
  //         />
  //         {row.getCanExpand() ? (
  //           <button
  //             {...{
  //               onClick: () => row.getToggleExpandedHandler(),
  //               style: { cursor: "pointer" },
  //             }}
  //           >
  //             {row.getIsExpanded() ? (
  //               <ChevronUpIcon className="text-gray-500 dark:text-gray-400 w-6 h-6" />
  //             ) : (
  //               <ChevronDownIcon className="text-gray-500 dark:text-gray-400 w-6 h-6" />
  //             )}
  //           </button>
  //         ) : (
  //           // "🔵"
  //           // TODO MAKE IT NULL
  //           ""
  //         )}
  //         {getValue()}
  //       </>
  //     </div>
  //   ),
  //   enableHiding: false,
  // },
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Appointment Id" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Appointment Id" />
    ),
    // cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("createdAt")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
  },
  {
    accessorKey: "time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    // cell: ({ row }) => {
    //   const date = new Date(row.getValue("time"));
    //   const formatted = date.toLocaleDateString();
    //   return <div className="font-medium">{formatted}</div>;
    // },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    accessorKey: "docs",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Docs" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("docs")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }
      // TODO CHANGE CLASSNAME - COLOR -TX COLOR BASED ON STATUS
      return (
        <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}
