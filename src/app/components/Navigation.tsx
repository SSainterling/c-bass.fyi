"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeSwitcher from "@/src/app/components/ThemeSwitcher";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/gear",
    title: "Gear",
  },
  {
    path: "/resume",
    title: "Resume",
  },
] as const;

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
      <header className="md:mt-6">
        <nav className="mx-auto flex max-w-[700px] items-right justify-between gap-3 px-4 py-3 md:px-6" data-qaid="name">
          {/* Creative "SS" Icon */}
          <Link href="/" className="hidden shrink-0 text-primary md:block">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
            >
              {/* Abstract "SS" Design */}
              <path
                  fill="currentColor"
                  d="M10 10C10 6, 14 4, 18 6C22 8, 22 12, 18 14C14 16, 10 14, 10 10ZM10 18C10 14, 14 12, 18 14C22 16, 22 20, 18 22C14 24, 10 22, 10 18Z"
                  transform="translate(0, 0)"
              />
              <path
                  fill="currentColor"
                  d="M22 10C22 6, 26 4, 30 6C34 8, 34 12, 30 14C26 16, 22 14, 22 10ZM22 18C22 14, 26 12, 30 14C34 16, 34 20, 30 22C26 24, 22 22, 22 18Z"
                  transform="translate(0, 0)"
              />
            </svg>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-1">
            {links.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`${
                        pathname === link.path ? "text-primary" : "text-secondary"
                    } relative rounded-lg px-3 py-1.5 text-sm transition-colors`}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                >
                  {pathname === link.path && (
                      <motion.span
                          layoutId="bubble"
                          className="absolute inset-0 -z-10 rounded-lg bg-tertiary"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                  )}
                  {link.title}
                </Link>
            ))}
          </div>

          {/* Theme Switcher */}
          <div className="flex h-8 w-8 items-center justify-center">
            <ThemeSwitcher />
          </div>
        </nav>
      </header>
  );
}