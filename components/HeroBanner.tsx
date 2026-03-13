"use client";

import formatDate from "@/utils/formatDate";
import Link from "next/link";
import Image from "next/image";
import { Trip } from "@/types/index";
import { useEffect, useState } from "react";
import { CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HeroBanner({ trips }: { trips: Trip[] }) {
  const tripsWithHeroBanner = trips.filter((t) => t.hero_image);
  const [currentTrip, setCurrentTrip] = useState(tripsWithHeroBanner[0]);

  useEffect(() => {
    setInterval(() => {
      setCurrentTrip(
        tripsWithHeroBanner[
          Math.floor(Math.random() * tripsWithHeroBanner.length)
        ],
      );
    }, 10000);
  }, []);
  console.log(currentTrip);

  return (
    <div className="relative w-full h-[85vh]">
      <Link href={`/trips-blog/${currentTrip.slug}`}>
        <Image
          src={currentTrip.hero_image!}
          alt={currentTrip.title}
          fill
          className="object-cover"
        ></Image>
        <div className="absolute bottom-4 left-4 lg:max-w-[50%] max-w-[70%]">
          <div className="flex flex-wrap gap-2 mb-4">
            {currentTrip.country.map((c) => (
              <Badge
                key={c}
                variant="secondary"
                className="bg-brilliant-rose-light text-eerie-black dark:hover:bg-brilliant-rose-light/80"
              >
                {c}
              </Badge>
            ))}
          </div>
          <h3 className="leading-none">{currentTrip.title}</h3>
          <p className="text-sm text-parchment">{currentTrip.excerpt}</p>
          <CardDescription>
            {currentTrip.start_date === currentTrip.end_date
              ? formatDate(currentTrip.start_date.toString(), true)
              : `${formatDate(currentTrip.start_date.toString(), true)} - ${formatDate(currentTrip.end_date!.toString(), true)}`}
          </CardDescription>
        </div>
      </Link>
    </div>
  );
}
