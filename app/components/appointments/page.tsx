// export enum Status {
//   request = "request",
//   approved = "approved",
//   declined = "declined",
//   checked_in = "checked in",
//   completed = "completed",
// }

import NestedRow from "./tableComponents/nested-row/nested-row";
import NestedTableRow from "./tableComponents/nested-row/nested-row";
import TableActions from "./tableComponents/table-actions";
import TableFooter from "./tableComponents/table-footer";
import TableHead from "./tableComponents/table-head";
import TableHeader from "./tableComponents/table-header";
import TableRow from "./tableComponents/table-row";
import TableRowMain from "./tableComponents/table-row-main";

// interface tableRowProps {
//   id: string;
//   createdAt: string;
//   location: string;
//   time: string;
//   docs: string[];
//   status: Status;
// }

// const Entry = ({
//   id,
//   createdAt,
//   location,
//   time,
//   docs,
//   status,
// }: tableRowProps) => {
//   return (
//     <> </>
//   );
// };

// export default Entry;

export default function Table() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        {/* <!-- Start coding here --> */}
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <TableHeader />
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between md:space-x-4 p-4 border-b dark:border-gray-700">
            <TableActions />
            {/* TODO TABLE BELOW*/}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <TableHead />
              <tbody data-accordion="table-column">
                <TableRowMain />
                <TableRowMain />
                <TableRowMain />
                <NestedRow />
                {/* <TableRow /> */}
              </tbody>
            </table>
          </div>
          <TableFooter />
          {/* ======================================================================================================================================================================================== */}
        </div>
      </div>
    </section>
  );
}
