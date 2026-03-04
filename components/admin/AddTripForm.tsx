"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddTripForm() {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6 w-full">
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="Title">Title</Label>
          <Input
            id="Title"
            type="text"
            placeholder="Write here the title of your trip"
          />
        </div>
      </div>
    </form>
  );
}
