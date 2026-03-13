"use client";

// import formatDate from "@/utils/formatDate";
import Link from "next/link";
import Image from "next/image";
import { Trip } from "@/types/index";
import { useEffect, useState } from "react";

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
      </Link>
    </div>
  );
}
