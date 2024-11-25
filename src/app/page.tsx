import Link from "@/src/app/components/Link";
import {ArrowUpRightIcon} from "@heroicons/react/24/solid";

export default function Home() {

        return (
            <div className="flex flex-col gap-16 md:gap-24">
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
                            Hey, Sebastian here!
                        </h1>
                        <p
                            className="max-w-lg animate-in text-secondary"
                            style={{"--index": 1} as React.CSSProperties}
                        >
                            I am a software engineer who learning new skills and showing ways
                            to display my learnings. In addition to coding, I make{" "}
                            <Link href="https://www.youtube.com/@Cbass_">YouTube</Link> videos,
                            where I focus on tech, and productivity.
                        </p>
                    </div>
                    <div
                        className="flex animate-in gap-3 text-sm"
                        style={{"--index": 2} as React.CSSProperties}
                    >
                        <Link
                            href="https://discord.gg/tgKj2sb82D"
                            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
                        >
                            Discord
                            <ArrowUpRightIcon className="h-4 w-4 text-tertiary"/>
                        </Link>
                        <Link
                            href="https://www.instagram.com/s_sainterling/"
                            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
                        >
                            IG
                            <ArrowUpRightIcon className="h-4 w-4 text-tertiary"/>
                        </Link>
                        <Link
                            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
                            href="https://twitter.com/S_Sainterling70"
                        >
                            Tweets
                            <ArrowUpRightIcon className="h-4 w-4 text-tertiary"/>
                        </Link>
                    </div>
                </div>
            </div>

        );

};