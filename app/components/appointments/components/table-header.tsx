import CreateAppointmentPage from "../../create/page";

export default function TableHeader() {
  return (
    <div className="relative px-4 bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex items-center justify-between pt-4 md:pb-4">
        <div className="flex items-center flex-1 space-x-2">
          <h5>
            <span className="dark:text-white">View all appointments</span>
          </h5>
        </div>
        <div className="flex items-center space-x-3">
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
                required={false}
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
                    fillRule="evenodd"
                    clipRule="evenodd"
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
                    fillRule="evenodd"
                    d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clipRule="evenodd"
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
  );
}

//TODO ADD ACTIONS BUTTON OR MAKE TableFilter COMPONENT
