export default function SummaryTabs() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 items-center justify-center">
        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
          Total Mawbs
        </h6>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          2
        </div>
      </div>
      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 items-center justify-center">
        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
          Total Hawbs
        </h6>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          3
        </div>
      </div>
      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 items-center justify-center">
        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
          Total Pcs
        </h6>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          231
        </div>
      </div>
      <div className="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 items-center justify-center">
        <h6 className="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">
          Total Weight (kg)
        </h6>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          12kg
        </div>
      </div>
    </div>
  );
}
