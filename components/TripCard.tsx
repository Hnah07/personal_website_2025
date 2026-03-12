import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
export default function TripCard({
  title,
  location,
  country,
  excerpt,
  startDate,
  endDate,
}: {
  title: string;
  location: string;
  country: string;
  excerpt: string;
  startDate: string;
  endDate: string;
}) {
  return (
    <Card>
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
