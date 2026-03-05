"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import DatePickerRange from "../DatePickerRange";
import { useState } from "react";
import { type DateRange } from "react-day-picker";
import countries from "country-list";

export default function AddTripForm() {
  const [date, setDate] = useState<DateRange | undefined>();
  const countryList = countries.getNames();
  const [excerpt, setExcerpt] = useState("");

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
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="Country">Country</Label>
          <Select>
            <SelectTrigger className="w-full" id="Country">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {countryList.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="location-type">Location Type</Label>
          <Select>
            <SelectTrigger className="w-full" id="location-type">
              <SelectValue placeholder="Select a location type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="city">City</SelectItem>
              <SelectItem value="region">Region</SelectItem>
              <SelectItem value="country">Country</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="location-name">Name of the location</Label>
          <Input
            id="location-name"
            type="text"
            placeholder="Enter the name of the location"
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="excerpt">
            Small excerpt of the trip (max 160 characters)
          </Label>
          <div className="relative">
            <Textarea
              id="excerpt"
              placeholder="Write a small excerpt of the trip to show in the trip list"
              maxLength={160}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
            <p className="text-sm text-muted-foreground absolute bottom-1 right-1">
              {excerpt.length}/160
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
