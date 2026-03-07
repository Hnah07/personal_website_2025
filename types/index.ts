import type { OutputData } from "@editorjs/editorjs";

type Trip = {
  id: string;
  title: string;
  slug: string;
  year: number;
  month: number;
  start_date: Date;
  end_date: Date;
  location_type: string[];
  location_name: string[];
  country: string[];
  excerpt: string;
  hero_image: string;
  published: boolean;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
};
export type { Trip };

type TripFormData = {
  title: string;
  country: { value: string }[];
  location_type: { value: string }[];
  location_name: { value: string }[];
  start_date: Date;
  end_date?: Date;
  excerpt?: string;
  published: boolean;
  hero_image?: File | null;
  trip_content?: OutputData;
};
export type { TripFormData };
