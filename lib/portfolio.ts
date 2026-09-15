export type PhotographyTheme = "beer-food" | "events" | "travel-nature";

export type PortfolioPhoto = {
  src: string;
  alt: string;
  aspectRatio: number;
};

export const photographyThemes: Record<
  PhotographyTheme,
  {
    title: string;
    description: string;
    photos: PortfolioPhoto[];
  }
> = {
  "beer-food": {
    title: "Beer & Food",
    description: "Craft, flavour, and the stories shared around the table.",
    photos: [
      {
        src: "/photos/beer-food/bar-bibine-brussels-no-logo-05.jpg",
        alt: "Beer and food at Bar Bibine in Brussels / Bier en eten bij Bar Bibine in Brussel",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/bar-bibine-brussels-no-logo-06.jpg",
        alt: "A detail from Bar Bibine in Brussels / Een detail van Bar Bibine in Brussel",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/bar-bibine-brussels-no-logo-10.jpg",
        alt: "A moment at Bar Bibine in Brussels / Een moment bij Bar Bibine in Brussel",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/brasserie-verschueren-nologo-03.jpg",
        alt: "Inside Brasserie Verschueren / Binnen in Brasserie Verschueren",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/brasserie-verschueren-nologo-05.jpg",
        alt: "A table at Brasserie Verschueren / Een tafel bij Brasserie Verschueren",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/penam-kebab-nologo-02.jpg",
        alt: "Food at Penam Kebab / Eten bij Penam Kebab",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/penam-kebab-nologo-03.jpg",
        alt: "A detail from Penam Kebab / Een detail van Penam Kebab",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/wallen-bxl-nologo-5.jpg",
        alt: "A scene at Wallen in Brussels / Een sfeerbeeld bij Wallen in Brussel",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/Smash-Brussels-08.jpg",
        alt: "A burger at Smash in Brussels / Een burger bij Smash in Brussel",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/Smash-Brussels-09.jpg",
        alt: "A detail from Smash in Brussels / Een detail van Smash in Brussel",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/Smash-Brussels-10.jpg",
        alt: "Food at Smash in Brussels / Eten bij Smash in Brussel",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/kastar-brussels-no-logo-03.jpg",
        alt: "A dish at Kastar in Brussels / Een gerecht bij Kastar in Brussel",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/kastar-brussels-no-logo-09.jpg",
        alt: "A detail from Kastar in Brussels / Een detail van Kastar in Brussel",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/2025-07_uitstap_BXL-Breweries-03.jpg",
        alt: "A beer tasting in Brussels / Een bierproeverij in Brussel",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/2025-07_uitstap_BXL-Breweries-10.jpg",
        alt: "A moment at Brussels Breweries / Een moment bij Brussels Breweries",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/2025-07_uitstap_BXL-Breweries-13.jpg",
        alt: "A detail from Brussels Breweries / Een detail van Brussels Breweries",
        aspectRatio: 0.67,
      },
    ],
  },
  events: {
    title: "Events",
    description: "Moments full of energy, movement, and people.",
    photos: [
      {
        src: "/photos/events/2025-mohsin-03.jpg",
        alt: "A moment at Mohsin's event / Een moment op het event van Mohsin",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/events/2025-mohsin-18.jpg",
        alt: "Guests at Mohsin's event / Gasten op het event van Mohsin",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/events/2026-01_nieuwjaarsdrink_lint-04.jpg",
        alt: "A moment at the Lint New Year's reception / Een moment op de nieuwjaarsdrink in Lint",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/events/2026-01_nieuwjaarsdrink_lint-26.jpg",
        alt: "Guests at the Lint New Year's reception / Gasten op de nieuwjaarsdrink in Lint",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/events/2026-01_nieuwjaarsdrink_lint-43.JPG",
        alt: "A detail from the Lint New Year's reception / Een detail van de nieuwjaarsdrink in Lint",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/events/2026-01_nieuwjaarsdrink_lint-47.jpg",
        alt: "The Lint New Year's reception / De nieuwjaarsdrink in Lint",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/events/2026-lint-fonkelt-01.jpg",
        alt: "A portrait at Lint Fonkelt / Een portret bij Lint Fonkelt",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/events/2026-lint-fonkelt-16.jpg",
        alt: "A moment at Lint Fonkelt / Een moment bij Lint Fonkelt",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/events/2026-lint-fonkelt-34.jpg",
        alt: "An evening at Lint Fonkelt / Een avond bij Lint Fonkelt",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/events/hettyhelsmoortel-11.jpg",
        alt: "Hetty Helsmoortel on stage / Hetty Helsmoortel op het podium",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/events/meimarkt-09.jpg",
        alt: "A scene at the Meimarkt / Een sfeerbeeld op de Meimarkt",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/events/meimarkt-11.jpg",
        alt: "Visitors at the Meimarkt / Bezoekers op de Meimarkt",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/events/meimarkt-16.jpg",
        alt: "A portrait at the Meimarkt / Een portret op de Meimarkt",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/events/brusselsbeerproject-wanderlust-1.jpg",
        alt: "Queuing for a beer at the Wanderlust beer festival in Brussels / In de rij voor een biertje op het Wanderlust bierfestival in Brussel",
        aspectRatio: 0.67,
      },
    ],
  },
  "travel-nature": {
    title: "Travel & Nature",
    description: "Places that invite you to pause and look a little longer.",
    photos: [
      {
        src: "/photos/travel-nature/2025-07_uitstap_BXL-Paris-03.jpg",
        alt: "A moment in Paris / Een moment in Parijs",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/travel-nature/2025-07_uitstap_BXL-Paris-28.jpg",
        alt: "A view of Paris / Een uitzicht op Parijs",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/travel-nature/2025-07_uitstap_BXL-Paris-31.jpg",
        alt: "A detail from Paris / Een detail van Parijs",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/travel-nature/2025-07_uitstap_Diest-04.jpg",
        alt: "A view in Diest / Een uitzicht in Diest",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/travel-nature/2025-07_uitstap_Diest-29.jpg",
        alt: "A moment in Diest / Een moment in Diest",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/travel-nature/2025-08_reis_Eindhoven-35.jpg",
        alt: "A scene in Eindhoven / Een sfeerbeeld in Eindhoven",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/travel-nature/2025-09_reis_athene-05.jpg",
        alt: "A view in Athens / Een uitzicht in Athene",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/travel-nature/2025-09_reis_athene-08.jpg",
        alt: "A moment in Athens / Een moment in Athene",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/travel-nature/2025-09_reis_athene-41.jpg",
        alt: "A detail from Athens / Een detail van Athene",
        aspectRatio: 0.75,
      },
    ],
  },
};
