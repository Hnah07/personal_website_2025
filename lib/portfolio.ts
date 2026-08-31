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
        alt: "Beer and food at Bar Bibine in Brussels",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/bar-bibine-brussels-no-logo-06.jpg",
        alt: "A detail from Bar Bibine in Brussels",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/bar-bibine-brussels-no-logo-10.jpg",
        alt: "A moment at Bar Bibine in Brussels",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/brasserie-verschueren-nologo-03.jpg",
        alt: "Inside Brasserie Verschueren",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/brasserie-verschueren-nologo-05.jpg",
        alt: "A table at Brasserie Verschueren",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/penam-kebab-nologo-02.jpg",
        alt: "Food at Penam Kebab",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/penam-kebab-nologo-03.jpg",
        alt: "A detail from Penam Kebab",
        aspectRatio: 0.67,
      },
      {
        src: "/photos/beer-food/wallen-bxl-nologo-5.jpg",
        alt: "A scene at Wallen in Brussels",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/Smash-Brussels-08.jpg",
        alt: "A burger at Smash in Brussels",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/Smash-Brussels-09.jpg",
        alt: "A detail from Smash in Brussels",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/Smash-Brussels-10.jpg",
        alt: "Food at Smash in Brussels",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/kastar-brussels-no-logo-03.jpg",
        alt: "A dish at Kastar in Brussels",
        aspectRatio: 1.5,
      },
      {
        src: "/photos/beer-food/kastar-brussels-no-logo-09.jpg",
        alt: "A detail from Kastar in Brussels",
        aspectRatio: 1.5,
      },
    ],
  },
  events: {
    title: "Events",
    description: "Moments full of energy, movement, and people.",
    photos: [],
  },
  "travel-nature": {
    title: "Travel & Nature",
    description: "Places that invite you to pause and look a little longer.",
    photos: [],
  },
};
