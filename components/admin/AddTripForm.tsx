"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DatePickerRange from "../DatePickerRange";
import { useState } from "react";
import { type DateRange } from "react-day-picker";

export default function AddTripForm() {
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6 w-full gap-4">
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="Title">Title</Label>
          <Input
            id="Title"
            type="text"
            placeholder="Write here the title of your trip"
          />
        </div>
        <DatePickerRange date={date} onDateChange={setDate} />
      </div>
    </form>
  );
}
