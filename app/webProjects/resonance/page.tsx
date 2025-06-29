import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/shared/Badge";
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const Resonance = () => {
  return (
    <>
      <Header />
      <h1 className="text-center pt-20">Resonance</h1>
      <p className="text-xs text-brilliant-rose font-medium text-center mb-4">
        🚧 Currently a Proof of Concept (POC) - Work in Progress 🚧
      </p>
      <p className="lg:w-1/2 sm:w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        Resonance is a full-stack social concert-tracking app that lets you
        check in to live shows, connect with friends, and relive your favorite
        music moments.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="https://github.com/Hnah07/resonance-fe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          <Github size={16} />
          Frontend
        </a>
        <a
          href="https://github.com/Hnah07/resonance-be"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          <Github size={16} />
          Backend
        </a>
        <a
          href="https://resonance-lake.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brilliant-rose text-white px-4 py-2 rounded-lg hover:bg-verdigris transition-colors duration-300"
        >
          Live Site
          <ExternalLink size={16} />
        </a>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-10">
        <Image
          src="/resonance-og-image.png"
          alt="Resonance App Screenshot"
          className="rounded-lg shadow-lg max-w-full h-auto w-full"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-10">
        <h2>Why I built this</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          I built Resonance because I&apos;ve always loved logging and
          reflecting on the experiences that matter to me, from beer tastings
          and coffee spots to train journeys and scrobbling music. But when it
          came to concerts, I couldn&apos;t find an app that let me check in to
          live performances in a way that felt personal, social, and structured.
          Resonance fills that gap. It also served as the perfect opportunity to
          turn a personal idea into a real product as part of the final project
          for my Full Stack Developer course.
        </p>
        <div className="mt-10">
          <div className="border-t border-gray-200 dark:border-gray-700 my-16"></div>
          <h2>Tech Stack</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            I built Resonance using the following technologies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Shadcn UI</Badge>
                <Badge>Next-PWA</Badge>
                <Badge>Vercel</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Laravel</Badge>
                <Badge>PHP</Badge>
                <Badge>Laravel Sanctum</Badge>
                <Badge>OpenAPI/Swagger</Badge>
                <Badge>Filament</Badge>
                <Badge>MariaDB</Badge>
                <Badge>Sequel Ace</Badge>
                <Badge>Digital Ocean</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-10">
        <h2>How it was built</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Resonance was built as a full stack web application using Next.js for
          the frontend and Laravel for the backend. The frontend uses Tailwind
          CSS for styling and includes features like authentication, filtering,
          geolocation, and dynamic routing. The backend provides a fully
          documented REST API with Laravel Sanctum for secure token-based
          authentication and OpenAPI/Swagger for documentation. An admin
          dashboard was implemented using Filament to manage users, concerts,
          and content. The app is deployed on Vercel (frontend) and DigitalOcean
          (backend + database), with real-time data flow managed via API Route
          Handlers in Next.js, acting as a proxy to the Laravel backend.
        </p>
        <h2 className="mt-10">Features</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Resonance has a few features that make it unique:
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Check in to concerts
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Add concerts to your profile
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              View concerts you&apos;ve checked in to
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              View concerts you&apos;ve added to your profile
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              See which artists you saw at each concert
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Upload photos and write reviews for check-ins
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Follow friends and view their timeline
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Discover upcoming concerts near you using location
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Filter concerts by genre, venue or date
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Track your top artists, venues, and genres
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              View visual stats of your concert history
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Explore events and concerts in a clean, card-based UI
            </span>
          </li>
        </ul>
        <h2 className="mt-10">Timing</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Building Resonance wasn&apos;t just a technical challenge, it was a
          time-balanced marathon of design, development, and iteration.
          Here&apos;s how the 97 hours broke down:
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Planning & Project Management ~7h</strong>
              <br />
              Defining features, scope, and realistic milestones.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Final Paper ~3h</strong>
              <br />
              Documenting the technical and conceptual process.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Wireframing & UI Design ~4h</strong>
              <br />
              Sketching layouts, user flow, and structure.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <strong>ERD & Database Design ~5h</strong>
              <br />
              Crafting a normalized schema to support all features.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Backend ~30h</strong>
              <br />
              Laravel 12, Sanctum auth, Swagger docs, Filament dashboard.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Frontend ~48h</strong>
              <br />
              Next.js, App Router, Tailwind, ShadCN UI.
              <br />
              Includes landing page and 5 functional pages with API integration.
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-10">
        <div className="border-t border-gray-200 dark:border-gray-700 my-16"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-10">
        <h2>What I learned</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Through building Resonance, I gained hands-on experience with full
          stack development: from database design to frontend UX. I learned how
          to structure and document a scalable REST API using Laravel and
          OpenAPI, implement secure token-based authentication with Laravel
          Sanctum, and manage relationships through pivot tables with UUIDs for
          better integrity and security. On the frontend, I explored the App
          Router in Next.js, handled server/client interactions via API route
          handlers, and built dynamic interfaces with Tailwind CSS and ShadCN
          UI.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          I also dove into advanced topics like geolocation, calculating
          distances with the Haversine formula, and caching responses for
          performance. Deploying the backend on DigitalOcean and the frontend on
          Vercel taught me the challenges of production environments, especially
          when dealing with cookies, cross-origin issues, and environment
          variables.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          Most of all, I learned how important it is to think in iterations:
          deploying and testing features one at a time, debugging thoughtfully,
          and adapting the backend structure to meet frontend needs. This
          project sharpened both my technical and problem-solving skills and
          gave me confidence in building real-world applications from scratch.
        </p>
        <h2 className="mt-10">Future Improvements</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          There are a few features I would like to add to Resonance in the
          future:
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Code cleanup and structure refinements
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Email verification for user accounts
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Push notifications for check-ins and updates
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Optimize and refactor API endpoints for better performance
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Retroactive check-ins for past concerts
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Move all filtering logic to the backend
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Enable artist search and filtering
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Import data from external APIs (e.g. Setlist.fm)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Let users add concerts, artists, and venues themselves
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Allow users to edit their check-ins and profile info
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Tag other users in your check-in
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              &quot;I&apos;m going&quot; feature for upcoming concerts
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Moderation dashboard for superusers to verify user-generated
              content
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Add gamification elements like badges or achievements
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-3 h-3 bg-verdigris rounded-sm mt-1 flex-shrink-0"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Implement real-time updates for new check-ins and likes
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-10">
        <div className="text-center">
          <a
            href="/webProjects"
            className="inline-flex items-center gap-2 bg-brilliant-rose text-white px-6 py-3 rounded-lg hover:bg-verdigris transition-colors duration-300"
          >
            ← Back to all web projects
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resonance;
