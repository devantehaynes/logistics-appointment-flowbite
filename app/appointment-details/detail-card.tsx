import { BoxIcon, CalendarIcon, TruckIcon } from "lucide-react";

export default function DetailCard() {
  return (
    <dl className="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      {/* TODO ADD STYLING TO SPACE OUT AVA */}
      <div className=" mb-4 rounded-t sm:mb-5">
        <div className="flex items-center">
          <img
            className="w-12 h-12 mr-2 rounded-full sm:mr-4 object-scale-down "
            src="https://imgs.search.brave.com/hMLg7PwxhrEjTEKiEgg06t9Qn9JGQOqQgi5EWefAvzw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDgvRGVsdGEtRW1i/bGVtLTcwMHgzOTQu/cG5n"
            alt="Delta avatar"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900 md:text-xl dark:text-white">
              Delta Airlines
            </h3>
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
              Warehouse
            </p>
          </div>
        </div>
      </div>
      <dt className="sr-only">Date</dt>
      {/* <dd className="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400"> */}
      <dd className="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400 ">
        <CalendarIcon className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500" />
        <span className="font-medium text-gray-900 dark:text-white">
          26th March, 2024 @ 16:00
        </span>
      </dd>
      <dt className="sr-only">Appointment Type</dt>
      <dd className="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400 ">
        <TruckIcon className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500" />
        <span className="font-medium text-gray-900 dark:text-white">
          Pick Up
        </span>
      </dd>
      <dt className="sr-only">Appointment Type</dt>
      <dd className="flex items-center mb-4 font-light text-gray-500 dark:text-gray-400 ">
        <BoxIcon className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500" />
        <span className="font-medium text-gray-900 dark:text-white">
          Regular Freight
        </span>
      </dd>

      {/* TODO NEW SECTION */}
      <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
        Adress
      </dt>
      <dd className="mb-4 font-medium text-gray-900 sm:mb-5 dark:text-white">
        1 World Way, Los Angeles, CA 90045-5803, United States of America
      </dd>

      <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
        Website
      </dt>
      <dd className="mb-4 font-medium text-gray-900 sm:mb-5 dark:text-white">
        Company.com
      </dd>

      <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
        Email Adress
      </dt>
      <dd className="mb-4 font-medium text-gray-900 sm:mb-5 dark:text-white">
        Example@company.com
      </dd>

      <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
        Phone Number
      </dt>
      <dd className="font-medium text-gray-900 dark:text-white">
        +1234 567 890 / +12 345 678{" "}
      </dd>

      {/* TODO END OF NEW SECTION */}
    </dl>
  );
}
