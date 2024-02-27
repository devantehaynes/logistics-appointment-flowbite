type Appointment = {
  id: string;
  createdAt: string;
  location: string;
  time: string;
  type: string;
  docs: string;
  status: string;
};

// TODO DOES ANYTHING BELOW CHANGE ANYTHING?

// export const appointments: Appointment[] = [
//   {
//     id: "24523",
//     createdAt: "100",
//     location: "pending",
//     time: "b@example.com",
//     type: "Drop Off",
//     docs: "",
//     status: "pending",
//   },
//   {
//     id: "32423",
//     createdAt: "100",
//     location: "pending",
//     time: "a@example.com",
//     type: "Pick Up",
//     docs: "",
//     status: "approved",
//   },
//   {
//     id: "32523",
//     createdAt: "100",
//     location: "pending",
//     time: "m@example.com",
//     type: "Pick Up",
//     docs: "",
//     status: "approved",
//   },

//   // ...
// ];

export const statuses = [
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "approved",
    label: "Approved",
  },
  {
    value: "processing",
    label: "Processing",
  },
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "denied",
    label: "Denied",
  },
];

export const types = [
  {
    value: "pickUp",
    label: "Pick Up",
  },
  {
    value: "dropOff",
    label: "Drop Off",
  },
  {
    value: "drayage",
    label: "Drayage",
  },
  {
    value: "missingPieces",
    label: "Missing Pieces",
  },
  // {
  //   value: "pickUp",
  //   label: "Pick Up",
  // },
];
