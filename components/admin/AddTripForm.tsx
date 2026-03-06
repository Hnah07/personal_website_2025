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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import DatePickerRange from "../DatePickerRange";
import { useState } from "react";
import { type DateRange } from "react-day-picker";
import countries from "country-list";
import Dropzone from "./Dropzone";
// import TripContentBlocks from "./TripContentBlocks";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import { TripFormData } from "@/types";

const TripContentBlocks = dynamic(() => import("./TripContentBlocks"), {
  ssr: false,
});

export default function AddTripForm() {
  const [date, setDate] = useState<DateRange | undefined>();
  const countryList = countries.getNames();
  // const [excerpt, setExcerpt] = useState("");
  // const [published, setPublished] = useState(false);
  const [heroImage, setHeroImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<TripFormData>({
    defaultValues: {
      published: false,
    },
  });

  const excerptValue = watch("excerpt");
  const onSubmit = (data: TripFormData) => {
    const formData = {
      ...data,
      start_date: date?.from,
      end_date: date?.to,
    };
    console.log("Form data:", formData);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col -mx-3 mb-6 w-full gap-4">
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Write here the title of your trip"
            {...register("title")}
          />
        </div>
        <DatePickerRange date={date} onDateChange={setDate} />
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="country">Country</Label>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full" id="country">
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
            )}
          />
        </div>
        <div className="px-3 mb-6 md:mb-0">
          <Label htmlFor="location-type">Location Type</Label>
          <Controller
            control={control}
            name="location_type"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full" id="location_type">
                  <SelectValue placeholder="Select a location type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city">City</SelectItem>
                  <SelectItem value="region">Region</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="px-3 mb-6 md:mb-0">
          <Label htmlFor="location_name">Name of the location</Label>
          <Input
            id="location_name"
            type="text"
            placeholder="Enter the name of the location"
            {...register("location_name")}
          />
        </div>
        <div className="px-3 mb-6 md:mb-0">
          <Label htmlFor="excerpt">
            Small excerpt of the trip (max 160 characters)
          </Label>
          <div className="relative">
            <Textarea
              id="excerpt"
              placeholder="Write a small excerpt of the trip to show in the trip list"
              maxLength={160}
              {...register("excerpt")}
            />
            <p className="text-sm text-muted-foreground absolute bottom-1 right-1">
              {excerptValue?.length ?? 0}/160
            </p>
          </div>
        </div>
        <div className="px-3 mb-6 md:mb-0">
          <Label>Upload hero image</Label>
          <Dropzone
            accept={{ "image/*": [] }}
            onDrop={(acceptedFiles) => {
              if (acceptedFiles.length > 0) {
                setHeroImage(acceptedFiles[0]);
              }
              console.log(acceptedFiles);
            }}
          />
        </div>
        <div className="px-3 mb-6 md:mb-0">
          <Label htmlFor="is-published">Publish this trip?</Label>
          <div className="flex items-center space-x-2">
            <Controller
              control={control}
              name="published"
              render={({ field }) => (
                <Checkbox
                  id="is-published"
                  // checked={published}
                  // onCheckedChange={(checked) => setPublished(checked === true)}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  defaultChecked={false}
                />
              )}
            />
            <p className="text-sm">Yes, publish this trip</p>
          </div>
        </div>
        <TripContentBlocks
          onContentChange={(content) => setTripContent(content)}
        />
      </div>
      <Button type="submit">Save Trip</Button>
    </form>
  );
}
