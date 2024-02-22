import DeleteButton from "@/app/components/appointments/tableComponents/nested-row/delete-button";
import { PenLine, PencilLine, Trash2Icon, TrashIcon } from "lucide-react";
import EditButton from "./edit-button";
import Info from "./info";

export default function NestedRow() {
  {
    /* TODO BOTTOM SECTION NESTED COLUMNS, SETSTATE PART const [expanded, setExpanded] = setState(false);
  function rowHandler() {
    setExpanded(true);
  }  */
  }
  return (
    <tr
      className=" flex-1 overflow-x-auto w-full"
      id="table-column-body-9"
      aria-labelledby="table-column-header-10"
    >
      <td className="p-4 border-b dark:border-gray-700" colSpan={10}>
        {/* TODO START CODING HERE*/}
        {/* TODO FOUR PHOTO GRID  */}
        {/* <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
              alt="iMac Front Image"
              className="h-full w-auto"
            />
          </div>
          <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
              alt="iMac Side Image"
              className="h-full w-auto"
            />
          </div>
          <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
              alt="iMac Back Image"
              className="h-full w-auto"
            />
          </div>
          <div className="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
              alt="iMac Back Image"
              className="h-full w-auto"
            />
          </div>
        </div> */}
        {/* TODO DETAILS SECTION  */}
        {/* <div>
          <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
            Details
          </h6>
          <div className="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">
            Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </div>
        </div> */}

        {/* TODO BOTTOM TABS-- PRODUCT STATE, SHIPPING, COLORS ... */}
        {/* <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
            <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
              Product State
            </h6>
            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-blue-200 dark:text-blue-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1"
                viewBox="0 0 20 20"
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
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
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
        </div> */}
        {/* TODO END OF PRECODED SECTION */}
        {/* TODO BEGINNING OF NEW SECTION */}
        <Info />
        {/* TODO EDIT/PREVIEW/DELETE BUTTON SECTION --- FOOTER --justify between ex added below*/}
        {/* <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            type="button"
            className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-1 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              ></path>
            </svg>
            Edit
          </button>
          <button
            type="button"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Preview
          </button>
        </div>
        <button
          type="button"
          className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-1.5 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Delete
        </button>
      </div> */}
        <div className="flex items-center space-x-3 mt-4">
          <EditButton />
          {/* <button
            type="button"
            className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            Preview
          </button> */}
          <DeleteButton />
        </div>
      </td>
    </tr>
  );
}
