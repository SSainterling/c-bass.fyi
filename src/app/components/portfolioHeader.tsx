import React from 'react';
import Link from "@/app/components/Link";
import {ArrowUpRightIcon} from "@heroicons/react/24/solid";

const portfolioHeader: React.FC = () => {
    return (
        <div className="flex flex-col gap-16 md:gap-24">
            <div className="flex flex-col gap-8">
                <div className="space-y-4">
                    <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
                        hey, Brian here!
                    </h1>
                    <p
                        className="max-w-lg animate-in text-secondary"
                        style={{"--index": 1} as React.CSSProperties}
                    >
                        I am a software engineer who builds for the web with a
                        design-oriented approach. In addition to coding, I make{" "}
                        <Link href="https://youtube.com/@brianruizy">YouTube</Link> videos,
                        where I focus on tech, and productivity.
                    </p>
                </div>
                <div
                    className="flex animate-in gap-3 text-sm"
                    style={{"--index": 2} as React.CSSProperties}
                >
                    <Link
                        href="https://discord.gg/KhNh8nbw3U"
                        className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
                    >
                        Discord
                        <ArrowUpRightIcon className="h-4 w-4 text-tertiary"/>
                    </Link>
                    <Link
                        href="https://instagram.com/brianruizy"
                        className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
                    >
                        IG
                        <ArrowUpRightIcon className="h-4 w-4 text-tertiary"/>
                    </Link>
                    <Link
                        className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
                        href="https://twitter.com/brianruizy"
                    >
                        Tweets
                        <ArrowUpRightIcon className="h-4 w-4 text-tertiary"/>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default portfolioHeader;
