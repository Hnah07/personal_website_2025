import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function AboutMe() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">About Me</h1>
        <p>
          <i>Greetings, earthling!</i>
        </p>
        <p>
          My name is Hannah, and I&apos;d like to welcome you to my little
          corner of the internet.
        </p>
        <p>
          I live in Mortsel, Belgium together with my partner. When I&apos;m not
          diving into code or creative projects, you&apos;ll probably find me
          enjoying some retro gaming, capturing moments through photography, or
          exploring the world of craft beer.
        </p>
        <h2 className="pt-10">My Professional Background</h2>
        <p>
          Technology has always been present in my life. I was that friend who
          got the first iPhone, who loved tinkering with Photoshop on my first
          MacBook, and who couldn&apos;t resist tweaking my Tumblr theme with
          bits of HTML. Even in my previous jobs, I was the go-to person for
          computer questions or quick website fixes. Still, for a long time,
          programming felt intimidating. Something I thought I &quot;wasn&apos;t
          smart enough&quot; for.
        </p>
        <p>
          Before moving into tech, I completed a bachelor&apos;s degree in
          Tourism and Recreation Management at Erasmus University College in
          Brussels, driven by my curiosity for the world, arts, and culture. I
          worked in communication roles, managing online content and a website
          for a non-profit, and later moved into recruitment, where I sharpened
          my communication and negotiation skills. Yet, I realized I wanted
          something more solid and creative, something that combined logic with
          design.
        </p>
        <p>
          That&apos;s when I took the leap into Full Stack Development at Syntra
          AB and discovered that coding is not only something I can do, but
          something I truly love. It challenged me, but it also gave me freedom:
          to build, to design, and to create. Now, with experience in Laravel,
          Next.js, React, and Node.js, I&apos;m focused on developing
          applications that are technically strong while also offering a great
          user experience.
        </p>
        <p>
          <b>
            Now, I&apos;m looking for my first job as a Full Stack/Frontend
            Developer. So please contact me if you have any opportunities!
          </b>
        </p>
        <p>
          Have a look at my{" "}
          <Link href="/webProjects" className="underline">
            projects
          </Link>{" "}
          or my{" "}
          <Link href="/#SkillsSection" className="underline">
            skills
          </Link>
          .
        </p>
        <h2 className="pt-10 pb-5">Beyond Coding</h2>
        <h3>Casual Gamer</h3>
        <p>
          I love diving back into nostalgic games on my Anbernic RG353V with
          titles like Earthbound, Pokémon, or Castlevania.
        </p>
        <h3>Photography</h3>
        <p>
          With my Fujifilm X-T5 (and my trusty 35mm lens), I enjoy capturing
          moments that combine atmosphere and detail. I often shoot for{" "}
          <Link href="https://beersbites.brussels" className="underline">
            beersbites.brussels
          </Link>
          , a blog I run with a friend about craft beer and food in Brussels. On
          trips, I switch to my 23mm to catch a wider perspective of the places
          I explore. You can find some of my photos at{" "}
          <Link
            href="https://portfolio.pixelfed.social/HannahCasier"
            className="underline"
          >
            my portfolio on Pixelfed
          </Link>
          .
        </p>
        <h3>Craft Beer</h3>
        <p>
          I&apos;ve checked in more than 8,000 unique beers on Untappd. What
          fascinates me is how beer can hold so many flavors, stories, and
          traditions in a single glass. Tasting together with friends,
          discussing what we discover. That&apos;s where the fun really is.
        </p>
        <h3>Table Tennis</h3>
        <p>
          I play competitively at KTTC Lint. Table tennis is both fast-paced and
          strategic, and for me, it&apos;s the perfect mix of challenge, focus,
          and discipline. Plus, it keeps me moving after long hours behind the
          screen.
        </p>
      </div>
      <Footer />
    </main>
  );
}
