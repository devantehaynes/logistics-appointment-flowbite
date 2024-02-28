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

export default function AppointmentDetails() {
    const { toast } = useToast();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className=" px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <PlusIcon className="mr-2" />
                        Appointment ID
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <div className="flex justify-between p-4">

                            <AlertDialogTitle>Title</AlertDialogTitle>
                            <AlertDialogCancel>X</AlertDialogCancel>
                        </div>
                        <AlertDialogDescription>
                            <div className="grid grid-cols-2 space-x-4">
                                {/* Left column */}
                                <div className=""></div>

                                {/* Right column */}
                                <div className="grid grid-cols-2"></div>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction>Action</AlertDialogAction>
                        <AlertDialogAction>Action</AlertDialogAction>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}