export default function Table() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        {/* <!-- Start coding here --> */}
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 border-b dark:border-gray-700">
            <div className="w-full flex items-center space-x-3">
              <h5 className="dark:text-white font-semibold">
                Flowbite Products
              </h5>
              <div className="text-gray-400 font-medium">6,560 results</div>
              <div data-tooltip-target="results-tooltip">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
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
                className="w-full md:w-auto flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add new product
              </button>
              <button
                type="button"
                className="w-full md:w-auto flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="mr-2 w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 12 13"
                  aria-hidden="true"
                >
                  <path d="M1 2V1h10v3H1V2Zm0 4h5v6H1V6Zm8 0h2v6H9V6Z" />
                </svg>
                Manage Columns
              </button>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between md:space-x-4 p-4 border-b dark:border-gray-700">
            <div className="mt-3 md:mt-0">
              <button
                id="actionsDropdownButton"
                data-dropdown-toggle="actionsDropdown"
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <svg
                  className="-ml-1 mr-1.5 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
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
            <div className="grid grid-cols-1 md:grid-cols-4 w-full lg:w-2/3 md:gap-4">
              {/* TODO ALL BELOW ARE selected={false} , maybe change to selected={true} */}
              <div className="w-full">
                <label htmlFor="brand" className="sr-only">
                  Brand
                </label>
                <select
                  id="brand"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected={false}>Brand</option>
                  <option value="purple">Samsung</option>
                  <option value="primary">Apple</option>
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
                  <option selected={false}>Price</option>
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
                  <option selected={false}>Category</option>
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
                  <option selected={false}>Color</option>
                  <option value="purple">Purple</option>
                  <option value="primary">primary</option>
                  <option value="pink">Pink</option>
                  <option value="green">Green</option>
                </select>
              </div>
            </div>
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
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                    Product
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[10rem]">
                    Category
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[6rem]">
                    Brand
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[6rem]">
                    Price
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[6rem]">
                    Stock
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[12rem]">
                    Total Sales
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Status
                    <svg
                      className="h-4 w-4 ml-1 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody data-accordion="table-column">
                <tr
                  className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                  id="table-column-header-0"
                  data-accordion-target="#table-column-body-0"
                  aria-expanded="false"
                  aria-controls="table-column-body-0"
                >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                      {/* TODO  CHECK ALL onClick={doSomething} */}
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    Apple iMac 27&#34;
                  </th>
                  <td className="px-4 py-3">PC</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $2999
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    200
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    245
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-0"
                  aria-labelledby="table-column-header-0"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
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
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    Apple iMac 20&#34;
                  </th>
                  <td className="px-4 py-3">PC</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $1499
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1237
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2000
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-1"
                  aria-labelledby="table-column-header-1"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                  id="table-column-header-2"
                  data-accordion-target="#table-column-body-2"
                  aria-expanded="false"
                  aria-controls="table-column-body-2"
                >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                      {/* TODO ALL <input> had an onClick  html attribute  */}
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    Apple iPhone 14
                  </th>
                  <td className="px-4 py-3">Phone</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $999
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    300
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    466
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-2"
                  aria-labelledby="table-column-header-2"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                  id="table-column-header-3"
                  data-accordion-target="#table-column-body-3"
                  aria-expanded="false"
                  aria-controls="table-column-body-3"
                >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    Apple iPad Air
                  </th>
                  <td className="px-4 py-3">Tablet</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $1199
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    4576
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    90
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-3"
                  aria-labelledby="table-column-header-3"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                  id="table-column-header-4"
                  data-accordion-target="#table-column-body-4"
                  aria-expanded="false"
                  aria-controls="table-column-body-4"
                >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    Xbox Series S
                  </th>
                  <td className="px-4 py-3">Gaming/Console</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $299
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    56
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    3087
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-4"
                  aria-labelledby="table-column-header-4"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                  id="table-column-header-5"
                  data-accordion-target="#table-column-body-5"
                  aria-expanded="false"
                  aria-controls="table-column-body-5"
                >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    PlayStation 5
                  </th>
                  <td className="px-4 py-3">Gaming/Console</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sony
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $799
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    78
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2999
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-5"
                  aria-labelledby="table-column-header-5"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                  id="table-column-header-6"
                  data-accordion-target="#table-column-body-6"
                  aria-expanded="false"
                  aria-controls="table-column-body-6"
                >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    Xbox Series X
                  </th>
                  <td className="px-4 py-3">Gaming/Console</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $699
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    200
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1870
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-6"
                  aria-labelledby="table-column-header-6"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                  id="table-column-header-7"
                  data-accordion-target="#table-column-body-7"
                  aria-expanded="false"
                  aria-controls="table-column-body-7"
                >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="h-8 w-auto mr-3"
                    />
                    Apple Watch SE
                  </th>
                  <td className="px-4 py-3">Watch</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    $399
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    657
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    5067
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-7"
                  aria-labelledby="table-column-header-7"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr
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
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
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
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-8"
                  aria-labelledby="table-column-header-8"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
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
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
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
                      Active
                    </div>
                  </td>
                </tr>
                <tr
                  className="hidden flex-1 overflow-x-auto w-full"
                  id="table-column-body-9"
                  aria-labelledby="table-column-header-9"
                >
                  <td className="p-4 border-b dark:border-gray-700" colSpan={9}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
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
                          Product State
                        </h6>
                        <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
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
                          <div className="rounded-full h-6 w-6 bg-primary-600"></div>
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
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
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
                        Edit
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
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
                className="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
              >
                Print barcodes
              </button>
              <button
                type="button"
                className="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
              >
                Duplicate
              </button>
              <button
                type="button"
                className="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
