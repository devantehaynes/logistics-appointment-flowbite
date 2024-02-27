"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import LinksVisitors from "./links-visitors";

export default function LinksTable() {
  const links = [{ id: "1", name: "Doe", viewCount: 23 }];

  return (
    <div className=" max-w-2xl w-full [&>*]:w-full sm:p-4">
      <h2 className="p-4">All links</h2>
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">TH1</TableHead>
              <TableHead className="font-medium">TH2</TableHead>
              <TableHead className="font-medium">TH3</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links
              ? links.map((link) => (
                  <Collapsible key={link.id} asChild>
                    <>
                      <TableRow>
                        <TableCell>{link.name}</TableCell>
                        <TableCell>{link.id}</TableCell>
                        <TableCell>
                          {link.viewCount}
                          <CollapsibleTrigger asChild>
                            <div>
                              <p>collaspe-trigger</p>
                            </div>
                          </CollapsibleTrigger>
                        </TableCell>
                      </TableRow>
                      <CollapsibleContent asChild>
                        <LinksVisitors linkId={link.id} />
                      </CollapsibleContent>
                    </>
                  </Collapsible>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
