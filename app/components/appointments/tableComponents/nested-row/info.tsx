import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, CalendarIcon, MapPin, MapPinIcon } from "lucide-react";

export default function Info() {
  return (
    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
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
                  Moderator
                </p>
              </div>
            </div>
          </div>
          <dt className="sr-only">Date</dt>
          {/* <dd className="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400"> */}
          <dd className="flex items-center mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
            <CalendarIcon className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500" />
            <span className="font-medium text-gray-900 dark:text-white">
              26th March, 2024 @ 16:00
            </span>
          </dd>
          {/* <dt className="sr-only">Location</dt>
          <dd className="flex items-center mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
            <MapPinIcon className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500" />
            <span className="font-medium text-gray-900 dark:text-white">
              California, USA
            </span>
          </dd> */}

          {/* TODO NEW SECTION */}
          <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
            Home Adress
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
        {/* TODO RIGHT SIDE BEGINS */}
        {/* <dl>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Details
          </dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            The 4th Digital Transformation and Industry 4.0 Free Online
            Conference Organized by Flowbite and Themesberg, Live on Saturday
            26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars
          </dd>
        </dl> */}
        {/* TODO CHANGE BORDER TO NECESSARY GRAY AND PADDING */}
        <div>
          <div className="h-14 bg-gray-700 rounded-lg border-gray-200 p-4">
            <div className=" flex items-center justify-around"><p>MAWB</p>
              <p>HAWB</p>
              <p>PCS</p>
              <p>WEIGHT(KG)</p></div>
          </div>
          {/* TODO NEW TAB SECTION BEGIN */}
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
          {/* TODO NEW TAB SECTION END */}
        </div>
      </div>
    </div>
  );
}

// TODO TRY AGAIN

{
  /* <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
<!-- Modal header -->
<div className="flex justify-between mb-4 rounded-t sm:mb-5">
    <div className="flex items-center">
        <img className="w-12 h-12 mr-2 rounded-full sm:mr-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar">
        <div>
            <h3 className="text-lg font-bold text-gray-900 md:text-xl dark:text-white">
                Helene Engels
            </h3>
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
                Moderator
            </p>
        </div>
    </div>
    <div>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 
        </button>
    </div>
</div>
<div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
    <dl>
        <dt className="sr-only">Role</dt>
        <dd className="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
            Frontend Developer
        </dd>
        <dt className="sr-only">Location</dt>
        <dd className="flex items-center mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
            <svg className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
            United States of America
        </dd>
        <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">Email Adress</dt>
        <dd className="mb-4 font-medium text-gray-900 sm:mb-5 dark:text-white">helene@company.com</dd>
        <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">Home Adress</dt>
        <dd className="mb-4 font-medium text-gray-900 sm:mb-5 dark:text-white">92 Miles Drive, Newark, NJ 07103, California, United States of America</dd>
        <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">Phone Number</dt>
        <dd className="font-medium text-gray-900 dark:text-white">+1234 567 890 / +12 345 678 </dd>
    </dl>
    <dl>
        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
        <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3.</dd>
        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Social</dt>

    </dl>
</div>
<div className="flex items-center justify-between">
    <div className="flex items-center space-x-3 sm:space-x-4">
        <button type="button" className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg aria-hidden="true" className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
            Edit
        </button>               
        <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Preview
        </button>
    </div>              
    <button type="button" className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
        <svg aria-hidden="true" className="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
        Delete
    </button>
</div>
</div> */
}

{
  /* TODO PARTICIPANTS SECTION  ENTER BELOW </dd> ON LINE 22*/
}
{
  /* <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
            Participants
          </dt>
          <dd className="flex mb-4 -space-x-4 sm:mb-5">
            <img
              className="w-8 h-8 border-2 rounded-full border-gray-50 dark:border-gray-700"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
              alt="Helene Engels"
            />
            <img
              className="w-8 h-8 border-2 rounded-full border-gray-50 dark:border-gray-700"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
              alt="Robert Brown"
            />
            <img
              className="w-8 h-8 border-2 rounded-full border-gray-50 dark:border-gray-700"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="Bonnie Green"
            />
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-600 border-2 rounded-full border-gray-50 hover:bg-gray-500 dark:border-gray-700"
            >
              +9
            </button>
          </dd>
          <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
            Online
          </dt>
          <dd className="mb-4 font-medium text-gray-900 sm:mb-5 dark:text-white">
            Google Meet
          </dd>
          <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
            Duration
          </dt>
          <dd className="font-medium text-gray-900 dark:text-white">
            All day{" "}
          </dd> */
}
