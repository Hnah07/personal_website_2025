"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const HashScrollHandler = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;

    if (hash) {
      // Remove the # from the hash
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams]);

  return null; // This component doesn't render anything
};

export default HashScrollHandler;
