import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import formatDate from "@/utils/formatDate";

export default function TripCard({
  heroImage,
  title,
  location,
  country,
  excerpt,
  startDate,
  endDate,
}: {
  heroImage: string;
  title: string;
  location: string[];
  country: string[];
  excerpt: string;
  startDate: string;
  endDate: string;
}) {
  return (
    <Card className="mb-8 w-1/3">
      <div className="relative">
        <Image src={heroImage} alt={title} width={150} height={100}></Image>
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {location.map((l) => (
              <Badge key={l} variant="secondary">
                {l}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 flex-row-reverse">
            {country.map((c) => (
              <Badge key={c} variant="secondary">
                {c}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <CardHeader>
        <CardDescription>
          {formatDate(startDate)} - {formatDate(endDate)}
        </CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{excerpt}</p>
      </CardContent>
      <CardFooter>
        <p>
          {startDate} - {endDate}
        </p>
      </CardFooter>
    </Card>
  );
}
