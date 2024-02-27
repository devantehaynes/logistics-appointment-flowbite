// components/links-visitors.tsx
"use client";

import { TableCell, TableRow } from "@/components/ui/table";

export default function LinksVisitors({ linkId }: { linkId: string }) {
  const visitors = [
    {
      id: "1",
      name: "John",
      totalDuration: "9",
    },
  ];

  return (
    <>
      {visitors
        ? visitors.map((visitor) => (
            <TableRow key={visitor.id}>
              <TableCell>{visitor.name}</TableCell>
              <TableCell>{visitor.totalDuration}</TableCell>
              <TableCell>
                <p>Gauge supposed to go here</p>
              </TableCell>
            </TableRow>
          ))
        : null}
    </>
  );
}
