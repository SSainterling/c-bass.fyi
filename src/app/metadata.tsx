import type {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://s-s.io"),
    title: "Sebastian Sainterling",
    description:
        "East Coast based Software Engineer and a Content Creator, sharing insights on well-designed products and technology advancements.",
    openGraph: {
        title: "Sebastian Sainterling",
        url: "https://s-s.io/",
        images: [{url: "https://b-r.io/api/og?title=B-R.io", alt: "b-r.io"}],
    },
};