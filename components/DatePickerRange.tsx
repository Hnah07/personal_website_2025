import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
// import { type DateRange } from "react-day-picker";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

export default function DatePickerRange({
  date,
  onDateChange,
}: {
  date: DateRange | undefined;
  onDateChange: (date: DateRange | undefined) => void;
}) {
  // const [date, setDate] = React.useState<DateRange | undefined>({
  //   from: new Date(new Date().getFullYear(), 0, 20),
  //   to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  // });

  return (
    <div className="w-full px-3 mb-6 md:mb-0 gap-2 flex flex-col">
      <Label htmlFor="date-picker-range">Choose a start and end date*</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-range"
            className="justify-start px-2.5 font-normal"
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={onDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
