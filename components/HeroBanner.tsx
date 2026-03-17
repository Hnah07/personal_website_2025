"use client";

import formatDate from "@/utils/formatDate";
import Link from "next/link";
import Image from "next/image";
import { Trip } from "@/types/index";
import { useEffect, useState } from "react";
import { CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HeroBanner({
  trips,
  trip,
}: {
  trips?: Trip[];
  trip?: Trip[];
}) {
  const tripsWithHeroBanner = trips?.filter((t) => t.hero_image) ?? [];
  const [currentTrip, setCurrentTrip] = useState<Trip>(
    (trip ?? tripsWithHeroBanner[0]) as Trip,
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!trips || trips.length === 0) return;
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTrip(
          tripsWithHeroBanner[
            Math.floor(Math.random() * tripsWithHeroBanner.length)
          ],
        );
        setIsVisible(true);
      }, 300);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative w-full h-[85vh] transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Link href={`/trips-blog/${currentTrip.slug}`}>
        <Image
          src={currentTrip.hero_image!}
          alt={currentTrip.title}
          fill
          className="object-cover"
        ></Image>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 lg:max-w-[50%] max-w-[70%]">
          <div className="flex flex-wrap gap-2 mb-4 ">
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
          {trips && <h3 className="leading-none">{currentTrip.title}</h3>}
          {trips && (
            <p className="text-sm text-parchment">{currentTrip.excerpt}</p>
          )}
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
