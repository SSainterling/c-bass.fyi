import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

import Copilot from "@/src/public/assets/copilot.jpeg";

export const metadata: Metadata = {
  title: "Gear | Sebastian Sainterling",
  description: "My toolbox. This is gear I actually own and recommend.",
  openGraph: {
    title: "Gear | Sebastian Sainterling",
    description: "My toolbox. This is gear I actually own and recommend.",
    type: "website",
    url: "https://c-bass.io/gear",
  },
};

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link, sponsored }: ItemProps) => (
  <li className="col-span-1 row-span-1 flex snap-start items-center gap-4 transition-opacity">
    <a
      className="relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl border border-primary bg-tertiary"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="h-full w-full overflow-hidden rounded-xl object-cover object-center"
        fill
      />
    </a>
    <div className="flex grow items-center justify-between gap-2">
      <div className="space-y-1">
        <h3 className="line-clamp-2 font-medium leading-tight text-primary">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-tight text-secondary">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto h-fit rounded-full bg-tertiary px-4 py-2 text-sm"
          href={link}
          target="_blank"
        >
          Get
        </a>
        {sponsored && (
          <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
        )}
      </div>
    </div>
  </li>
);

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Gear
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              My toolbox.
            </p>
          </div>
          <p
            className="max-w-lg animate-in text-pretty text-secondary"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            List of tools I actually own and enjoy using. Using the affiliate
            links help support my content creation. Last updated on October
            2024.
          </p>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex animate-in flex-col gap-8"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="animated-list -mx-6 grid snap-x snap-mandatory scroll-pl-6 auto-cols-[100%] grid-flow-col grid-rows-3 flex-nowrap gap-x-3 gap-y-8 overflow-x-scroll px-6 md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-none md:gap-x-6 md:overflow-auto">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      // sponsored={item.sponsored}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

const gear = [
  {
    name: "Logitech MX Master Mouse 3S",
    category: "Home Desk Setup",
    description:
      "Ergonomic and comfortable to be used for all day use, love the scrolling!",
    image: "https://m.media-amazon.com/images/I/61xKiCADfpL._AC_SL1500_.jpg",
    link: "https://amzn.to/3PFWCKu",
  },
  {
    name: "Copilot Money",
    category: "Apps",
    image: Copilot,
    description:
      " For all things personal finance, this is a must.",
    link: "https://copilot.money/link/cxkfRAoUGeybxipT7",
  },
  {
    name: "HP DisplayLink Hub",
    category: "Home Desk Setup",
    image: "https://m.media-amazon.com/images/I/51Akvh02nDL._AC_SL1280_.jpg",
    description: "A hub that enables dual monitors on M1 MBP.",
    link: "https://amzn.to/3UnTbJo",
  },
  {
    name: "Dell UltraSharp U2722D",
    category: "Home Desk Setup",
    link: "https://amzn.to/3KLucN1",
    image: "https://m.media-amazon.com/images/I/81siJZnLDaL._AC_SL1500_.jpg",
    description: "A 27 inch 4K monitor",
  },
  {
    name: "VIVO Dual Monitor Stand",
    category: "Home Desk Setup",
    link: "https://amzn.to/40U0jzC",
    image: "https://m.media-amazon.com/images/I/61JPGtCI0GL._AC_SL1500_.jpg",
    description: "White articulating pneumatic monitor stand",
  },
  {
    name: "MacBook Pro M1 Pro 16-inch",
    category: "Everyday Carry",
    image: "https://m.media-amazon.com/images/I/61bwiPRcv2L._AC_SL1500_.jpg",
    description: "Daily driver. Sleek, great display, and performant.",
    link: "https://amzn.to/41fkhEH",
  },
  {
    name: "Apple AirPods Max",
    category: "Everyday Carry",
    image: "https://m.media-amazon.com/images/I/81OdA-ITspL._AC_SL1500_.jpg",
    description: "Active Noise Cancelling, Transparency Mode, Spatial Audio",
    link: "https://amzn.to/3mie64b",
  },
  {
    name: "Apple AirPods Pro",
    category: "Everyday Carry",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803961739",
    description:
      "Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency.",
    link: "https://amzn.to/3UmMQhq",
  },
  {
    name: "Apple AirTag",
    category: "Everyday Carry",
    image: "https://m.media-amazon.com/images/I/81Lq1AfCYpS._AC_SL1500_.jpg",
    description: "Track your keys, wallet, backpack, and more.",
    link: "https://amzn.to/41dXoSa",
  },
  {
    name: "Apple Watch Series 10 46mm",
    category: "Everyday Carry",
    description: "Carry your keys in a neat and organized way.",
    image: "https://m.media-amazon.com/images/I/61cDmya0jwL._AC_SX679_.jpg",
    link: "https://amzn.to/49clTTh",
  },
  {
    name: "Cruical X9 Pro 1TB Portable SSD",
    category: "Other",
    description:
      "Fast, reliable, and secure storage. To edit videos on the go.",
    image: "https://m.media-amazon.com/images/I/51FUiwiAeML._AC_SX679_.jpg",
    link: "https://amzn.to/3vwoD03",
  },
];
