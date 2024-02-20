import { FilesIcon, MoreVerticalIcon } from "lucide-react";

export default function TableRowMain() {
  return (
    <tr
      className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
      id="table-column-header-1"
      data-accordion-target="#table-column-body-1"
      aria-expanded="false"
      aria-controls="table-column-body-1"
    >
      <td className="px-4 py-3 w-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td className="p-3 w-4">
        <svg
          data-accordion-icon=""
          className="w-6 h-6 shrink-0"
          fill="currentColor"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </td>
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
      >
        {/* <img
        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-front-image.png"
        alt="iMac Front Image"
        className="h-8 w-auto mr-3"
      /> */}
        23882R
      </th>
      <td className="px-4 py-3">02/16/24 16:36</td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        DELTA AIRLINES
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        02/17/24 12:00
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Drop Off
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <FilesIcon />
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
          Approved
        </div>
      </td>
      {/* TODO ADD MORE ACTIONS? */}
      {/* <td className="px-4 py-3 whitespace-nowrap">
        <div className="w-fit  text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          <MoreVerticalIcon />
        </div>
      </td> */}
    </tr>
  );
}
