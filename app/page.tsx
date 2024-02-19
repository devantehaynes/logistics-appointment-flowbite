import { FilesIcon, MoreVerticalIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CreateAppointmentPage from "./components/create/page";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

// interface tableRowProps() {
//   apptID: string(),
// }

// function tableRow(props: tableRowProps) {
//   return(<tr
//     className="hidden flex-1 overflow-x-auto w-full"
//     id="table-column-body-0"
//     aria-labelledby="table-column-header-0"
//   >
//     <td className="p-4 border-b dark:border-gray-700">
//       <div className="grid grid-cols-4 gap-4 mb-4">
//         <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
//           <img
//             src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-front-image.png"
//             alt="iMac Front Image"
//             className="h-full w-auto"
//           />
//         </div>
//         <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
//           <img
//             src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-side-image.png"
//             alt="iMac Side Image"
//             className="h-full w-auto"
//           />
//         </div>
//         <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
//           <img
//             src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-back-image.png"
//             alt="iMac Back Image"
//             className="h-full w-auto"
//           />
//         </div>
//         <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
//           <img
//             src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-back-image.png"
//             alt="iMac Back Image"
//             className="h-full w-auto"
//           />
//         </div>
//       </div>
//       <div>
//         <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
//           Details
//         </h6>
//         <div className="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">
//           Standard glass, 3.8GHz 8-core 10th-generation Intel Core
//           i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
//           DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
//           memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
//           2, Magic Keyboard - US.
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-4 mt-4">
//         <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
//           <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
//             Appointment State
//           </h6>
//           <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-blue-200 dark:text-blue-800 flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-3.5 w-3.5 mr-1"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//             New
//           </div>
//         </div>
//         <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
//           <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
//             Shipping
//           </h6>
//           <div className="flex items-center text-gray-500 dark:text-gray-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-3.5 w-3.5 mr-1"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                 clip-rule="evenodd"
//               />
//             </svg>
//             Worldwide
//           </div>
//         </div>
//         <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
//           <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
//             Colors
//           </h6>
//           <div className="flex items-center space-x-2">
//             <div className="rounded-full h-6 w-6 bg-purple-600"></div>
//             <div className="rounded-full h-6 w-6 bg-indigo-400"></div>
//             <div className="rounded-full h-6 w-6 bg-blue-600"></div>
//             <div className="rounded-full h-6 w-6 bg-pink-400"></div>
//             <div className="rounded-full h-6 w-6 bg-teal-300"></div>
//             <div className="rounded-full h-6 w-6 bg-green-300"></div>
//           </div>
//         </div>
//         <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
//           <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
//             Brand
//           </h6>
//           <div className="flex items-center text-gray-500 dark:text-gray-400">
//             Apple
//           </div>
//         </div>
//         <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
//           <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
//             Sold by
//           </h6>
//           <div className="flex items-center text-gray-500 dark:text-gray-400">
//             Flowbite
//           </div>
//         </div>
//         <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
//           <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
//             Ships from
//           </h6>
//           <div className="flex items-center text-gray-500 dark:text-gray-400">
//             Flowbite
//           </div>
//         </div>
//         <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
//           <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
//             Dimensions (cm)
//           </h6>
//           <div className="flex items-center text-gray-500 dark:text-gray-400">
//             105 x 15 x 23
//           </div>
//         </div>
//         <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
//           <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
//             Item weight
//           </h6>
//           <div className="flex items-center text-gray-500 dark:text-gray-400">
//             12kg
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center space-x-3 mt-4">
//         <button
//           type="button"
//           className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 mr-1"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
//             <path
//               fill-rule="evenodd"
//               d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
//               clip-rule="evenodd"
//             />
//           </svg>
//           Edit
//         </button>
//         <button
//           type="button"
//           className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//         >
//           Preview
//         </button>
//         <button
//           type="button"
//           className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 mr-1"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//               clip-rule="evenodd"
//             />
//           </svg>
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>)
// }

export default function Home() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5 h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        {/* <!-- Start coding here --> */}
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="relative px-4 bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex items-center justify-between pt-4 md:pb-4">
              <div className="flex items-center flex-1 space-x-2">
                <h5>
                  <span className="dark:text-white">View all appointments</span>
                </h5>
              </div>
              <div className="flex items-center space-x-3">
                {/* <button
                  type="button"
                  className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  View JSON
                </button> */}
                <button
                  type="button"
                  className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  Export
                </button>
              </div>
            </div>
            <div className="flex flex-col-reverse items-stretch justify-between pb-4 space-y-3 md:flex-row md:items-center md:space-y-0">
              <div className="flex flex-col w-full space-y-3 lg:w-2/3 md:space-y-0 md:flex-row md:items-center">
                <form className="flex-1 w-full md:max-w-sm md:mr-4">
                  <label
                    htmlFor="default-search"
                    className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search "
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search..."
                      required={true}
                    />
                    <button
                      type="submit"
                      className="absolute top-0 bottom-0 right-0 px-4 py-2 text-sm font-medium text-white rounded-r-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
                <div className="flex items-center space-x-4">
                  <div>
                    <button
                      id="filterDropdownButton"
                      data-dropdown-toggle="filterDropdown"
                      type="button"
                      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-4 h-4 mr-2 text-gray-400"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        />
                      </svg>
                      Filter
                    </button>
                    <div
                      id="filterDropdown"
                      className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                      <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                        Category
                      </h6>
                      <ul
                        className="space-y-2 text-sm"
                        aria-labelledby="dropdownDefault"
                      >
                        <li className="flex items-center">
                          <input
                            id="apple"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="apple"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Apple (56)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="fitbit"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="fitbit"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Fitbit (56)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="dell"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="dell"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Dell (56)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="asus"
                            type="checkbox"
                            value=""
                            checked
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="asus"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Asus (97)
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button
                      id="configurationDropdownButton"
                      data-dropdown-toggle="configurationDropdown"
                      type="button"
                      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 text-gray-400"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Configurations
                    </button>
                    <div
                      id="configurationDropdown"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="configurationDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            By Category
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            By Brand
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Reset
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full pb-4 md:pb-0 md:w-auto md:flex-row md:items-center md:space-x-3">
                {/* <button
                  type="button"
                  className=" px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  <a
                    href="/components/create"
                    className="flex items-center justify-center"
                  >
                    <PlusIcon className="mr-2" />
                    Create appointment
                  </a>
                </button> */}
                <CreateAppointmentPage />
              </div>
            </div>
            <div className="flex flex-wrap pt-1 pb-4 border-t dark:border-gray-700">
              <div className="items-center hidden mt-3 mr-4 text-sm font-medium text-gray-900 md:flex dark:text-white">
                Show only:
              </div>

              <div className="flex flex-wrap">
                <div className="flex items-center mt-3 mr-4">
                  <input
                    id="all-appointments"
                    type="radio"
                    value=""
                    name="show-only"
                    className="w-4 h-4 bg-gray-100 border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="all-appointments"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    All
                  </label>
                </div>
                <div className="flex items-center mt-3 mr-4">
                  <input
                    id="approved"
                    type="radio"
                    value=""
                    name="show-only"
                    className="w-4 h-4 bg-gray-100 border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="approved"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Approved
                  </label>
                </div>
                <div className="flex items-center mt-3 mr-4">
                  <input
                    id="pending"
                    type="radio"
                    value=""
                    name="show-only"
                    className="w-4 h-4 bg-gray-100 border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="pending"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Pending
                  </label>
                </div>
                <div className="flex items-center mt-3 mr-4">
                  <input
                    id="completed"
                    type="radio"
                    value=""
                    name="show-only"
                    className="w-4 h-4 bg-gray-100 border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="completed"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Completed
                  </label>
                </div>
                <div className="flex items-center mt-3 mr-4">
                  <input
                    id="
                    declined"
                    type="radio"
                    value=""
                    name="show-only"
                    className="w-4 h-4 bg-gray-100 border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="
                    declined"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Declined
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 border-b dark:border-gray-700">
            <div className="w-full flex items-center space-x-3">
              <h5 className="dark:text-white font-semibold">
                Flowbite Appointments
              </h5>
              <div className="text-gray-400 font-medium">6,560 results</div>
              <div data-tooltip-target="results-tooltip">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">More info</span>
              </div>
              <div
                id="results-tooltip"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Showing 1-10 of 6,560 results
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-end space-x-3">
              <button
                type="button"
                className="w-full md:w-auto flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add new appointment
              </button>
              <button
                type="button"
                className="w-full md:w-auto flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="mr-2 w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M1 2V1h10v3H1V2Zm0 4h5v6H1V6Zm8 0h2v6H9V6Z" />
                </svg>
                Manage Columns
              </button>
            </div>
          </div> */}
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between md:space-x-4 p-4 border-b dark:border-gray-700">
            <div className="mt-3 md:mt-0">
              <button
                id="actionsDropdownButton"
                data-dropdown-toggle="actionsDropdown"
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <svg
                  className="-ml-1 mr-1.5 w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
                Actions
              </button>
              <div
                id="actionsDropdown"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="actionsDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mass Edit
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete all
                  </a>
                </div>
              </div>
            </div>
            {/* TODO  GOTTA GO THROUGH WHOLE FILE AND DELETE UNUSED ELEMENTS*/}
            {/* <div className="grid grid-cols-1 md:grid-cols-4 w-full lg:w-2/3 md:gap-4">
              <div className="w-full">
                <label htmlFor="brand" className="sr-only">
                  Brand
                </label>
                <select
                  id="brand"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="">Brand</option>
                  <option value="purple">Samsung</option>
                  <option value="blue">Apple</option>
                  <option value="pink">Pink</option>
                  <option value="green">Green</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="price" className="sr-only">
                  Price
                </label>
                <select
                  id="price"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="">Price</option>
                  <option value="below-100">$ 1-100</option>
                  <option value="below-500">$ 101-500</option>
                  <option value="below-1000">$ 501-1000</option>
                  <option value="over-1000">$ 1001+</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="category" className="sr-only">
                  Category
                </label>
                <select
                  id="category"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="">Category</option>
                  <option value="pc">PC</option>
                  <option value="phone">Phone</option>
                  <option value="tablet">Tablet</option>
                  <option value="console">Gaming/Console</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="color" className="sr-only">
                  Color
                </label>
                <select
                  id="color"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="">Color</option>
                  <option value="purple">Purple</option>
                  <option value="blue">blue</option>
                  <option value="pink">Pink</option>
                  <option value="green">Green</option>
                </select>
              </div>
            </div> */}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Expand/Collapse Row</span>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[14rem]">
                    Appointment Id
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[10rem]">
                    Created at
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[6rem]">
                    Appt Location
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[6rem]">
                    Appt Time
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[6rem]">
                    Appt Type
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[12rem]">
                    Docs
                    {/* <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg> */}
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Status
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Actions
                    {/* <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg> */}
                  </th>
                </tr>
              </thead>
              <tbody data-accordion="table-column">
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-0"
                  aria-labelledby="table-column-header-0"
                >
                  <td className="p-4 border-b dark:border-gray-700">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-front-image.png"
                          alt="iMac Front Image"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-side-image.png"
                          alt="iMac Side Image"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-back-image.png"
                          alt="iMac Back Image"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-back-image.png"
                          alt="iMac Back Image"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Appointment State
                        </h6>
                        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-blue-200 dark:text-blue-800 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 mr-1"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 mr-1"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full h-6 w-6 bg-purple-600"></div>
                          <div className="rounded-full h-6 w-6 bg-indigo-400"></div>
                          <div className="rounded-full h-6 w-6 bg-blue-600"></div>
                          <div className="rounded-full h-6 w-6 bg-pink-400"></div>
                          <div className="rounded-full h-6 w-6 bg-teal-300"></div>
                          <div className="rounded-full h-6 w-6 bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mt-4">
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Preview
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
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
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
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
                    DSD COMPANIES
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
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit  text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                      <MoreVerticalIcon />
                    </div>
                  </td>
                </tr>
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
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
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
                    232979B
                  </th>
                  <td className="px-4 py-3">02/16/24 16:39</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    DELTA AIRLINES
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    02/17/24 12:00
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Pick Up
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <FilesIcon />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Approved
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit  text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                      <MoreVerticalIcon />
                    </div>
                  </td>
                </tr>
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
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
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
                    234309D
                  </th>
                  <td className="px-4 py-3">02/16/24 16:40</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    DHL
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    02/17/24 12:00
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Pick Up
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <FilesIcon />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Approved
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit  text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                      <MoreVerticalIcon />
                    </div>
                  </td>
                </tr>
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
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
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
                    2334522S
                  </th>
                  <td className="px-4 py-3">02/16/24 16:41</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    DSD COMPANIES
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    02/17/24 12:00
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Drayage
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <FilesIcon />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Approved
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit  text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                      <MoreVerticalIcon />
                    </div>
                  </td>
                </tr>

                {/* <tr
                  className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                  id="table-column-header-8"
                  data-accordion-target="#table-column-body-8"
                  aria-expanded="false"
                  aria-controls="table-column-body-8"
                >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
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
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    NIKON D850
                  </th>
                  <td className="px-4 py-3">Photo</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Nikon
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $599
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    465
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1870
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Approved
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit  text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                      <MoreVerticalIcon />
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-8"
                  aria-labelledby="table-column-header-8"
                >
                  <td className="p-4 border-b dark:border-gray-700">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-front-image.png"
                          alt="iMac Front Image"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-side-image.png"
                          alt="iMac Side Image"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-back-image.png"
                          alt="iMac Back Image"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-back-image.png"
                          alt="iMac Back Image"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Appointment State
                        </h6>
                        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-blue-200 dark:text-blue-800 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 mr-1"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 mr-1"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full h-6 w-6 bg-purple-600"></div>
                          <div className="rounded-full h-6 w-6 bg-indigo-400"></div>
                          <div className="rounded-full h-6 w-6 bg-blue-600"></div>
                          <div className="rounded-full h-6 w-6 bg-pink-400"></div>
                          <div className="rounded-full h-6 w-6 bg-teal-300"></div>
                          <div className="rounded-full h-6 w-6 bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mt-4">
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Preview
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                  id="table-column-header-9"
                  data-accordion-target="#table-column-body-9"
                  aria-expanded="false"
                  aria-controls="table-column-body-9"
                >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
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
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    Monitor BenQ EX2710Q
                  </th>
                  <td className="px-4 py-3">TV/Monitor</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    BenQ
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $499
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    354
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    76
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Approved
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit  text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                      <MoreVerticalIcon />
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-9"
                  aria-labelledby="table-column-header-9"
                >
                  <td className="p-4 border-b dark:border-gray-700">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-front-image.png"
                          alt="iMac Front Image"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-side-image.png"
                          alt="iMac Side Image"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-back-image.png"
                          alt="iMac Back Image"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/appointments/imac-back-image.png"
                          alt="iMac Back Image"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Appointment State
                        </h6>
                        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-blue-200 dark:text-blue-800 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 mr-1"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 mr-1"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full h-6 w-6 bg-purple-600"></div>
                          <div className="rounded-full h-6 w-6 bg-indigo-400"></div>
                          <div className="rounded-full h-6 w-6 bg-blue-600"></div>
                          <div className="rounded-full h-6 w-6 bg-pink-400"></div>
                          <div className="rounded-full h-6 w-6 bg-teal-300"></div>
                          <div className="rounded-full h-6 w-6 bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mt-4">
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Preview
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
          {/* <div
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-4 pt-3 pb-4"
            aria-label="Table navigation"
          >
            <div className="text-xs flex items-center space-x-5">
              <div>
                <div className="text-gray-500 dark:text-gray-400 mb-1">
                  Purchase price
                </div>
                <div className="dark:text-white font-medium">$ 3,567,890</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 mb-1">
                  Total selling price
                </div>
                <div className="dark:text-white font-medium">$ 8,489,400</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="py-1.5 flex items-center text-sm font-medium text-center text-blue-700 rounded-lg hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-blue-500 dark:hover:text-blue-600 dark:focus:ring-blue-800"
              >
                Print barcodes
              </button>
              <button
                type="button"
                className="py-1.5 flex items-center text-sm font-medium text-center text-blue-700 rounded-lg hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-blue-500 dark:hover:text-blue-600 dark:focus:ring-blue-800"
              >
                Duplicate
              </button>
              <button
                type="button"
                className="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Export CSV
              </button>
            </div>
          </div> */}
          <div className="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
