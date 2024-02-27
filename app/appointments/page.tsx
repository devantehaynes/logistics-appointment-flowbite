import { Appointment, columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import TableHeader from "./components/data-table-header";

async function getData(): Promise<Appointment[]> {
  // TODO Fetch data from your API here.
  //   const res = await fetch(
  //     "https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users"
  //   );
  //   const data = await res.json();
  //   return data;
  // }
  // TODO THIS IS WHERE DATA IS COMING FROM
  return [
    {
      id: "324523",
      createdAt: "100",
      location: "here",
      time: "A@example.com",
      type: "Drop Off",
      docs: "",
      status: "approved",
    },
    {
      id: "324523",
      createdAt: "100",
      location: "pending",
      time: "B@example.com",
      type: "Pick Up",
      docs: "",
      status: "approved",
    },
    {
      id: "324523",
      createdAt: "100",
      location: "there",
      time: "C@example.com",
      type: "Pick Up",
      docs: "",
      status: "approved",
    },
    // ...
  ];
}

export default async function Page() {
  const data = await getData();
  return (
    <section className="BG-COLOR py-3 sm:py-5 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12 ">
        {/* TODO REMOVE BORDER AND ROUNDED? */}
        {/* <div className="COMPONENT-COLOR relative shadow-md sm:rounded-lg overflow-hidden p-4"> */}
        {/* <div className="COMPONENT-COLOR relative shadow-md sm:rounded-lg overflow-hidden p-4 rounded-md border dark:border-gray-600 border-gray-300"> */}
        <div className="COMPONENT-COLOR relative shadow-sm sm:rounded-lg overflow-hidden p-4 rounded-md border border-gray-50 dark:border-gray-700 ">
          <TableHeader />
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </section>
  );
}
