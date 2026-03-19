"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-foreground/10">
        <div className="flex items-center h-10 md:h-14 px-6 md:px-10">

          <div className="flex-1 hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-[11px] uppercase tracking-[0.15em] font-medium hover:opacity-40 transition-opacity">
              Shop Collection
            </Link>
            <Link href="/arcana-archive" className="text-[11px] uppercase tracking-[0.15em] font-medium opacity-40 hover:opacity-70 transition-opacity">
              Arcana Archive
            </Link>
          </div>

          <button
            className="md:hidden text-[11px] uppercase tracking-[0.15em] font-medium hover:opacity-40 transition-opacity"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>

          <div className="flex-1 flex justify-center">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <Image
                src="/pixiesmith-logo.png"
                alt="Pixiesmith"
                width={140}
                height={40}
                className="h-6 md:h-7 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="flex-1 hidden md:flex items-center justify-end gap-8">
            <Link href="/story" className="text-[11px] uppercase tracking-[0.15em] font-medium hover:opacity-40 transition-opacity">
              About
            </Link>
            <Link href="/cart" className="text-[11px] uppercase tracking-[0.15em] font-medium hover:opacity-40 transition-opacity">
              Cart (0)
            </Link>
          </div>

          <Link
            href="/cart"
            className="md:hidden text-[11px] uppercase tracking-[0.15em] font-medium hover:opacity-40 transition-opacity"
          >
            Cart (0)
          </Link>

        </div>
      </header>

      <div
        className={`fixed inset-0 z-[90] bg-[#0a0a0a] flex flex-col md:hidden transition-opacity duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex items-center justify-between h-10 px-6 border-b border-white/10">
          <Image
            src="/pixiesmith-logo.png"
            alt="Pixiesmith"
            width={140}
            height={40}
            className="h-5 w-auto brightness-0 invert"
          />
          <button
            className="text-[11px] uppercase tracking-[0.15em] text-[#fafafa] font-medium hover:opacity-40 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-6 gap-8">
          {[
            { href: "/shop", label: "Shop Collection", delay: "150ms" },
            { href: "/arcana-archive", label: "Arcana Archive", delay: "250ms", muted: true },
            { href: "/story", label: "About", delay: "350ms" },
            { href: "/contact", label: "Contact", delay: "450ms", muted: true },
          ].map(({ href, label, delay, muted }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-[2.5rem] leading-none font-normal text-[#fafafa] transition-all duration-500 hover:opacity-40 ${muted ? "opacity-40" : "opacity-100"
                } ${menuOpen ? "translate-y-0" : "translate-y-6 opacity-0"}`}
              style={{
                fontFamily: "var(--font-realm), ui-serif, Georgia, serif",
                transitionDelay: menuOpen ? delay : "0ms",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-6 h-16 flex items-center border-t border-white/10">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#fafafa]/30 font-medium">
            Wearable symbols of transformation
          </span>
        </div>
      </div>
    </>
  );
}
