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

import {
  Check,
  ChevronsUpDown,
  PaperclipIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
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
import DetailCard from "./detail-card";
import SummaryTabs from "./summary-tabs";

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

export default function AppointmentDetails() {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Appointment ID</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className=" max-w-6xl mx-auto p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Appointment Details
                </h2>
                <AlertDialogCancel className="border-none  dark:bg-gray-800 dark:hover:bg-transparent bg-gray-white hover:bg-white ">
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
              {/* <div className="relative p-4 bg-white rounded-lg shadow  border-gray-200  dark:bg-gray-800 sm:p-5"> */}
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <DetailCard />
                <div className="flex flex-col space-y-6 justify-between">
                  <div className="flex flex-col ">
                    <Card className="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 flex">
                      <div></div>
                      <div></div>
                      <Button
                        variant="outline"
                        className="rounded-full py-2.5 px-2"
                      >
                        <PaperclipIcon className="text-gray-300 hover:text-blue-400" />
                      </Button>
                    </Card>
                  </div>
                  <SummaryTabs />
                </div>
              </div>
              {/* </div> */}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
