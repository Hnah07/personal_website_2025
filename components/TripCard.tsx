import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

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
      <Image src={heroImage} alt={title} width={150} height={100}></Image>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {location}, {country}
        </CardDescription>
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
