"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function InfoSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Show Major Info</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Major Information</SheetTitle>
          <SheetDescription>
            Here you can find important details about the project and actions you can take.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <h3 className="font-semibold col-span-4">Project Overview</h3>
            <div className="col-span-4">
              <p>
                This project aims to streamline automation processes, enabling better efficiency and productivity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <h3 className="font-semibold col-span-4">Key Features</h3>
            <ul className="col-span-4 list-disc list-inside">
              <li>Automated deployment processes</li>
              <li>Real-time analytics dashboard</li>
              <li>Team collaboration tools</li>
              <li>Client management system</li>
            </ul>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <h3 className="font-semibold col-span-4">Contact Information</h3>
            <div className="col-span-4">
              <p>Email: support@yourcompany.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
