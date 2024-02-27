// import { CalendarIcon, XIcon } from "lucide-react";
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Check, ChevronsUpDown, PlusIcon, XIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverContent,
  // import AppointmentCalendar from "./calendar";
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const frameworks = [
  {
    value: "americanAirline",
    label: "American Airline",
  },
  {
    value: "chinaSouthern",
    label: "China Southern",
  },
  {
    value: "deltaAirline",
    label: "Delta Airline",
  },
  {
    value: "hawaiiAirline",
    label: "Hawaii Airline",
  },
  {
    value: "koreanAirline",
    label: "Korean Airline",
  },
];

// "use client"
export default function CreateAppointmentPage() {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    // <div className="relative p-4 w-full max-w-3xl h-full md:h-auto mx-auto items-center">
    //   {/* <!-- Modal content --> */}
    //   <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
    //     {/* <!-- Modal header --> */}
    //     <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
    //       <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //         Create Appointment
    //       </h3>
    //       <button
    //         type="button"
    //         className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    //         data-modal-toggle="createAppointmentModal"
    //       >
    //         <svg
    //           aria-hidden="true"
    //           className="w-5 h-5"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //         <span className="sr-only">Close modal</span>
    //       </button>
    //     </div>
    //     {/* <!-- Modal body --> */}
    //     <form action="#">
    //       <div className="grid gap-4 mb-4 sm:grid-cols-2">
    //         <div>
    //           <label
    //             htmlFor="name"
    //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //           >
    //             Appointment Location
    //           </label>
    //           <input
    //             type="text"
    //             name="name"
    //             id="name"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //             placeholder="Type facility name or facility id"
    //             required={true}
    //           />
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="type"
    //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //           >
    //             Appointment Type
    //           </label>
    //           <select
    //             id="type"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           >
    //             <option defaultValue="">Select appointment type</option>
    //             <option value="TV">Pick Up (Import)</option>
    //             <option value="PC">Drop Off (Export)</option>
    //             <option value="GA">Drayage (Containers)</option>
    //             <option value="PH">Missing Pieces</option>
    //           </select>
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="carrier"
    //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //           >
    //             Carrier
    //           </label>
    //           <input
    //             type="text"
    //             name="carrier"
    //             id="carrier"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //             placeholder="Appointment carrier"
    //             value="DSD Companies"
    //             required={true}
    //           />
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="driver"
    //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //           >
    //             Driver
    //           </label>
    //           <select
    //             id="driver"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           >
    //             <option defaultValue="">Select a driver</option>
    //             <option value="TV">Driver 1</option>
    //             <option value="PC">Driver 2</option>
    //             <option value="GA">Driver 3 </option>
    //           </select>
    //         </div>
    //         <div className="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
    //           <div>
    //             <label
    //               htmlFor="weight"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               AWB/BL
    //             </label>
    //             <input
    //               type="number"
    //               name="weight"
    //               id="weight"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               placeholder="Enter AWB/BL"
    //               required={true}
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="length"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               HAWB
    //             </label>
    //             <input
    //               type="number"
    //               name="length"
    //               id="length"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               placeholder="Enter HAWB"
    //               required={true}
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="breadth"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Qty
    //             </label>
    //             <input
    //               type="number"
    //               name="breadth"
    //               id="breadth"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               placeholder="Enter quantity"
    //               required={true}
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="width"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Weight (kg)
    //             </label>
    //             <input
    //               type="number"
    //               name="width"
    //               id="width"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               placeholder="Enter weight"
    //               required={true}
    //             />
    //           </div>
    //         </div>
    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="notes"
    //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //           >
    //             Notes
    //           </label>
    //           <textarea
    //             id="notes"
    //             rows={4}
    //             className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //             placeholder="Write appointment notes here"
    //           ></textarea>
    //         </div>
    //       </div>
    //       {/* <div className="mb-4 space-y-4 sm:flex sm:space-y-0">
    //         <div className="flex items-center mr-4">
    //           <input
    //             id="inline-checkbox"
    //             type="checkbox"
    //             value=""
    //             name="sellingType"
    //             className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    //           />
    //           <label
    //             htmlFor="inline-checkbox"
    //             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             In-store only
    //           </label>
    //         </div>
    //         <div className="flex items-center mr-4">
    //           <input
    //             id="inline-2-checkbox"
    //             type="checkbox"
    //             value=""
    //             name="sellingType"
    //             className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    //           />
    //           <label
    //             htmlFor="inline-2-checkbox"
    //             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             Online selling only
    //           </label>
    //         </div>
    //         <div className="flex items-center mr-4">
    //           <input
    //             checked={true}
    //             //   onChange={}
    //             id="inline-checked-checkbox"
    //             type="checkbox"
    //             value=""
    //             name="sellingType"
    //             className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    //           />
    //           <label
    //             htmlFor="inline-checked-checkbox"
    //             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             Both in-store and online
    //           </label>
    //         </div>
    //       </div> */}
    //       <div className="mb-4">
    //         <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    //           Appointment Documents
    //         </span>
    //         <div className="flex justify-center items-center w-full">
    //           <label
    //             htmlFor="dropzone-file"
    //             className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    //           >
    //             <div className="flex flex-col justify-center items-center pt-5 pb-6">
    //               <svg
    //                 aria-hidden="true"
    //                 className="mb-3 w-10 h-10 text-gray-400"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    //                 ></path>
    //               </svg>
    //               <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
    //                 <span className="font-semibold">Click to upload</span> or
    //                 drag and drop
    //               </p>
    //               <p className="text-xs text-gray-500 dark:text-gray-400">
    //                 SVG, PNG, JPG or GIF (MAX. 800x400px)
    //               </p>
    //             </div>
    //             <input id="dropzone-file" type="file" className="hidden" />
    //           </label>
    //         </div>
    //       </div>
    //       <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
    //         <button
    //           type="submit"
    //           className="w-full sm:w-auto justify-center text-white inline-flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //         >
    //           Save Appointment
    //         </button>
    //         <button className="w-full sm:w-auto text-white justify-center inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //           <CalendarIcon className="h-4 w-4 mr-2" />
    //           Create Another Appointment
    //         </button>
    //         <button
    //           data-modal-toggle="createAppointmentModal"
    //           type="button"
    //           className="w-full justify-center sm:w-auto text-gray-500 inline-flex items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
    //         >
    //           <XIcon />
    //           Discard
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <section className="">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className=" px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <PlusIcon className="mr-2" />
            Create Appointment
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className=" max-w-2xl mx-auto p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create Appointment
                </h2>
                <AlertDialogCancel className="border-none  dark:bg-gray-800 dark:hover:bg-none bg-gray-white hover:bg-white ">
                  <Button
                    variant="ghost"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-800 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <XIcon />
                    <span className="sr-only">Close modal</span>
                  </Button>
                </AlertDialogCancel>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                  <div className="grid w-full max-w-sm items-center gap-1.5 space-y-1  flex-col">
                    <Label
                      className="TEXT-THEME-COLOR"
                      htmlFor="appointmentLocation"
                    >
                      Appointment Location
                    </Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className=" justify-between THEME-COLOR"
                        >
                          {value
                            ? frameworks.find(
                                (framework) => framework.value === value
                              )?.label
                            : "Select facility..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Command>
                          <CommandInput placeholder="Search facility name..." />
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {framework.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="grid w-full max-w-sm items-center gap-1.5 space-y-1">
                    <Label
                      className="TEXT-THEME-COLOR"
                      htmlFor="appointmentType"
                    >
                      Appointment Type
                    </Label>

                    <Select>
                      <SelectTrigger className="THEME-COLOR">
                        <SelectValue placeholder="Select an appointment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>Appointment Type</SelectLabel> */}
                          <SelectItem value="pickUp">Pick Up</SelectItem>
                          <SelectItem value="dropOff">Drop Off</SelectItem>
                          <SelectItem value="drayage">Drayage</SelectItem>
                          <SelectItem value="missingPieces">
                            Missing Pieces
                          </SelectItem>
                          {/* {/* <SelectItem value="grapes">Grapes</SelectItem> */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full ">
                    <div className="grid w-full max-w-sm items-center gap-1.5 space-y-1">
                      <Label
                        className="TEXT-THEME-COLOR"
                        htmlFor="appointmentLocation"
                      >
                        Carrier Name
                      </Label>
                      <Input
                        type="text"
                        id="appointmentLocation"
                        placeholder="Enter carrier name"
                        value="DSD Trucking"
                        className="THEME-COLOR"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="grid w-full max-w-sm items-center gap-1.5 space-y-1">
                      <Label className="TEXT-THEME-COLOR" htmlFor="driver">
                        Driver
                      </Label>

                      <Select>
                        <SelectTrigger className="THEME-COLOR">
                          <SelectValue placeholder="Select an driver" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {/* <SelectLabel>Appointment Type</SelectLabel> */}
                            <SelectItem value="driver1">Driver</SelectItem>
                            <SelectItem value="driver2">Driver</SelectItem>
                            <SelectItem value="driver3">Driver</SelectItem>
                            {/* <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem> */}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {/* TODO BEGINNING OF APPOINTMENT ITEMS */}
                  <div className=" w-full grid grid-cols-4 gap-4 sm:col-span-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5 space-y-1">
                      <Label className="TEXT-THEME-COLOR" htmlFor="mawb">
                        Mawb
                      </Label>
                      <Input
                        type="text"
                        id="mawb"
                        placeholder="Enter Mawb"
                        className="THEME-COLOR"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 space-y-1">
                      <Label className="TEXT-THEME-COLOR" htmlFor="hawb">
                        Hawb
                      </Label>
                      <Input
                        type="text"
                        id="hawb"
                        placeholder="Enter Hawb"
                        className="THEME-COLOR"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 space-y-1">
                      <Label className="TEXT-THEME-COLOR" htmlFor="pieceCount">
                        Pcs
                      </Label>
                      <Input
                        type="text"
                        id="pieceCount"
                        placeholder="Enter piece count"
                        className="THEME-COLOR"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 space-y-1">
                      <Label className="TEXT-THEME-COLOR" htmlFor="weight(kg)">
                        Weight (kg)
                      </Label>
                      <Input
                        type="text"
                        id="weight(kg)"
                        placeholder="Enter weight"
                        className="THEME-COLOR"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="grid w-full gap-1.5 space-y-1">
                      <Label className="TEXT-THEME-COLOR" htmlFor="message">
                        Notes
                      </Label>
                      <Textarea
                        placeholder="Type appointment notes here."
                        id="message"
                        className="THEME-COLOR"
                      />
                    </div>
                  </div>

                  <div className=" w-full grid sm:col-span-2">
                    <div className="flex flex-col gap-2 space-y-1">
                      <Label className="TEXT-THEME-COLOR" htmlFor="message">
                        Appointment Documents
                      </Label>
                      <div
                        id=""
                        className="flex items-center justify-center w-full "
                      >
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* TODO END OF APPOINTMENT ITEMS */}
                </div>
                {/* <AppointmentCalendar /> */}
              </form>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex items-center space-x-4 ">
            <AlertDialogAction
              onClick={() => {
                toast({
                  title: "Appointment created.",
                  description: "Appointment successfully made",
                  action: (
                    <ToastAction
                      altText="All Appointments"
                      className="THEME-COLOR"
                    >
                      All Appointments
                    </ToastAction>
                  ),
                });
              }}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Save Appointment
            </AlertDialogAction>
            <AlertDialogAction
              onClick={() => {
                toast({
                  title: "Appointment created.",
                  // description: "There was a problem with your request.",
                  action: (
                    <ToastAction altText="All Appointments">
                      All Appointments
                    </ToastAction>
                  ),
                });
              }}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Create Another Appointment
            </AlertDialogAction>
            <AlertDialogCancel
              className="bg-gray-50 border border-gray-300 text-muted-foreground hover:text-black hover:bg-gray-200 focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500
              dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <XIcon className="mr-2 h-4 w-4 stroke-2" />
              Discard
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
