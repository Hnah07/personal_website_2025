import {
  Card,
  CardHeader,
  //   CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

export default function TripCard({
  heroImage,
  title,
  location,
  country,
  excerpt,
  startDate,
  endDate,
  slug,
}: {
  heroImage: string;
  title: string;
  location: string[];
  country: string[];
  excerpt: string;
  startDate: string;
  endDate: string;
  slug: string;
}) {
  return (
    <Link href={`/trips-blog/${slug}`}>
      <Card className="mb-8">
        <div className="relative h-48 w-full overflow-hidden rounded-t-md">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
          ></Image>
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {location.map((l) => (
                <Badge
                  key={l}
                  variant="secondary"
                  className="bg-brilliant-rose-light text-eerie-black dark:hover:bg-brilliant-rose-light/80"
                >
                  {l}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 flex-row-reverse">
              {country.map((c) => (
                <Badge
                  key={c}
                  variant="secondary"
                  className="bg-brilliant-rose-light text-eerie-black dark:hover:bg-brilliant-rose-light/80"
                >
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <CardHeader>
          <CardDescription>
            {startDate === endDate
              ? formatDate(startDate, true)
              : `${formatDate(startDate, true)} - ${formatDate(endDate, true)}`}
          </CardDescription>
          <CardTitle>
            <h3>{title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="-mt-4">{excerpt}</p>
        </CardContent>
        {/* <CardFooter>
          <p>
            {startDate} - {endDate}
          </p>
        </CardFooter> */}
      </Card>
    </Link>
  );
}
