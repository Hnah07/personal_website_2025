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
import TripContentBlocks from "./TripContentBlocks";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { TripFormData } from "@/types";
import { OutputData } from "@editorjs/editorjs";
import slugify from "slugify";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const supabase = createClient();

export default function AddTripForm() {
  const [date, setDate] = useState<DateRange | undefined>();
  const countryList = countries.getNames();
  // const [excerpt, setExcerpt] = useState("");
  // const [published, setPublished] = useState(false);
  const [heroImage, setHeroImage] = useState<File | null>(null);
  const [tripContent, setTripContent] = useState<OutputData | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<TripFormData>({
    defaultValues: {
      published: false,
      country: [{ value: "" }],
      location_type: [{ value: "" }],
      location_name: [{ value: "" }],
    },
  });

  const excerptValue = watch("excerpt");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "country",
  });

  const {
    fields: locationTypeFields,
    append: appendLocationType,
    remove: removeLocationType,
  } = useFieldArray({
    control,
    name: "location_type",
  });

  const {
    fields: locationNameFields,
    append: appendLocationName,
    remove: removeLocationName,
  } = useFieldArray({
    control,
    name: "location_name",
  });

  const onSubmit = async (data: TripFormData) => {
    if (!date?.from) {
      toast.error("Start date is required");
      return;
    }
    const slug = slugify(data.title, { lower: true, strict: true });
    const year = date?.from?.getFullYear();
    const month = date?.from ? date.from.getMonth() + 1 : undefined;
    const formData = {
      ...data,
      start_date: date?.from,
      end_date: date?.to,
      trip_content: tripContent,
      hero_image: heroImage,
      slug: slug,
      year: year,
      month: month,
    };
    console.log("Generated slug:", slug);
    console.log("Extracted year:", year);
    console.log("Extracted month:", month);
    console.log("Form data:", formData);

    const { data: trip, error } = await supabase
      .from("trips")
      .insert({
        title: data.title,
        slug: slug,
        start_date: date?.from,
        end_date: date?.to,
        country: data.country.map((c) => c.value),
        location_type: data.location_type.map((lt) => lt.value),
        location_name: data.location_name.map((ln) => ln.value),
        excerpt: data.excerpt,
        content: tripContent,
        published: data.published,
        year: year,
        month: month,
      })
      .select()
      .single();
    if (error) {
      console.error("Error inserting trip:", error);
      return;
    }

    const tripId = trip.id;

    if (heroImage) {
      const { data: imageData, error: imageError } = await supabase.storage
        .from("trip-images")
        .upload(`trip-${tripId}/${heroImage.name}`, heroImage);

      if (imageError) {
        console.error("Error uploading hero image:", imageError);
        return;
      }

      const { data: urlData } = supabase.storage
        .from("trip-images")
        .getPublicUrl(imageData.path);

      const { error: updateError } = await supabase
        .from("trips")
        .update({ hero_image: urlData.publicUrl })
        .eq("id", tripId);

      if (updateError) {
        console.error("Error updating trip with hero image URL:", updateError);
        return;
      }
    }
    toast.success("Trip created successfully!");
    router.push(`/admin/trips`);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col -mx-3 mb-6 w-full gap-4">
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="title">Title*</Label>
          <Input
            id="title"
            type="text"
            placeholder="Write here the title of your trip"
            {...register("title", {
              required: "Title is required",
            })}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>
        <DatePickerRange date={date} onDateChange={setDate} />
        <div className="w-full px-3 mb-6 md:mb-0">
          <Label htmlFor="country">Country*</Label>
          {fields.map((field, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const fieldName = `country.${index}.value` as any;
            return (
              <div key={field.id} className="flex items-center space-x-2 mb-2">
                <Controller
                  control={control}
                  name={fieldName}
                  rules={{ required: "Country is required" }}
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
                <Button type="button" onClick={() => remove(index)}>
                  -
                </Button>
                {errors.country?.[index]?.value && (
                  <p className="text-sm text-red-500">
                    {errors.country[index].value.message}
                  </p>
                )}
              </div>
            );
          })}
          <Button type="button" onClick={() => append({ value: "" })}>
            + Add Country
          </Button>
        </div>
        <div className="px-3 mb-6 md:mb-0">
          <Label>Location Type*</Label>
          {locationTypeFields.map((field, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const fieldName = `location_type.${index}.value` as any;
            return (
              <div key={field.id} className="flex gap-2 mb-2">
                <Controller
                  control={control}
                  name={fieldName}
                  rules={{ required: "Location type is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
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
                <Button type="button" onClick={() => removeLocationType(index)}>
                  -
                </Button>
              </div>
            );
          })}
          <Button
            type="button"
            onClick={() => appendLocationType({ value: "" })}
          >
            + Add Location Type
          </Button>
        </div>
        <div className="px-3 mb-6 md:mb-0">
          <Label htmlFor="location_name">Name of the location(s)</Label>
          {locationNameFields.map((field, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const fieldName = `location_name.${index}.value` as any;
            return (
              <div key={field.id} className="flex gap-2 mb-2">
                <Controller
                  control={control}
                  name={fieldName}
                  rules={{ required: "Location name is required" }}
                  render={({ field }) => (
                    <Input
                      id={`location_name_${index}`}
                      type="text"
                      placeholder="Enter the name of the location"
                      onChange={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                <Button type="button" onClick={() => removeLocationName(index)}>
                  -
                </Button>
              </div>
            );
          })}
          <Button
            type="button"
            onClick={() => appendLocationName({ value: "" })}
          >
            + Add Location Name
          </Button>
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
        <TripContentBlocks onContentChange={setTripContent} />
      </div>
      <Button type="submit">Save Trip</Button>
    </form>
  );
}
