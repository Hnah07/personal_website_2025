type Trip = {
  id: string;
  title: string;
  slug: string;
  year: number;
  month: number;
  start_date: Date;
  end_date: Date;
  location_type: string;
  location_name: string;
  country: string;
  excerpt: string;
  hero_image: string;
  published: boolean;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
};

export type { Trip };
