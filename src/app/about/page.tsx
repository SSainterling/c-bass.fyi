import Image from "next/image";
import { Metadata } from "next";

import Link from "@/src/app/components/Link";
import Section from "@/src/app/components/Section";
import ConnectLinks from "@/src/app/components/ConnectLinks";
import Workplaces from "@/src/app/about/components/Workplaces";
import Gallery from "@/src/app/about/components/Gallery";

import gmLogo from "src/public/assets/gmLogo.png";
// import perishipLogo from "public/work/periship-logo.jpeg";
// import camsLogo from "public/work/cams-logo.png";
// import uhdLogo from "public/work/uhd.png";
//
import meMirna from "src/public/assets/meMirna.jpg";
import NYC from "src/public/assets/nycSkyline.jpg";
import Greeting from "./components/Greeting";

export const metadata: Metadata = {
  title: "About | Sebastain Sainterling",
  description:
    " Atlanta based Engineer and a Content Creator, sharing insights on well-designed products and technology advancements.",
};

export default async function About() {

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
              //TODO: Fix this
            src={NYC}
              // src={new URL("https://res.cloudinary.com/brianruizy/image/upload/v1635730004/gallery/nyc.jpg")}
            alt={"me and lily"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={meMirna}
            alt={"Downtown New York"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> I&apos;m Sebastian Sainterling! Originally from Florida,
              I&apos;m now based in the vibrant place that is Atlanta, Georgia.
            </p>
            <p>
              My curiosity for computers began at age 10, which naturally led me
              to pursue a career in tech. I&apos;ve been working as a software
              engineer, experiencing as a Software Test Engineer, for{" "}
              {new Date().getFullYear() - 2020} years now!
            </p>
            <p>
              Alongside my coding journey, I run a{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/@Cbass_"
              >
                YouTube
              </Link>{" "}
              channel where I share insights on technology, productive coding
              vlogs, and occasionally practice my filmmaking skills.
            </p>
            <p>
              When I&apos;m not at my desk, you can find me at the gym or enjoying some coffee at a local
              shop!
            </p>
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I have extensive experience in software testing and development, with a strong command of programming
              languages such as Java, JavaScript, HTML, CSS, and Swift.
              I specialize in automation using Selenium and have hands-on expertise with performance testing tools
              like Apache JMeter, JMeter DSL, LoadRunner Enterprise, and VuGen.
              I have successfully integrated CI/CD pipelines using Azure DevOps and utilized Dynatrace RUM for performance monitoring.
              My skill set includes version control with Git, as well as working with tools like IntelliJ and Insomnia.
              Proficient in SAFe Agile and Agile SDLC methodologies,
              I excel in UI and API testing, along with conducting performance tests for high-traffic applications.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Software Test Engineer",
    company: "General Motors",
    date: "2022 -",
    imageSrc: gmLogo,
    link: "https://gm.com",
  },
];
