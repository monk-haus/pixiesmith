"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        id="site-nav"
        className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none mix-blend-difference text-[#fafafa] will-change-transform"
      >
        <div className="flex items-start justify-between w-full pointer-events-auto">

          <div className="flex flex-col gap-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium">
            <button
              className="md:hidden hover:opacity-50 transition-opacity text-left"
              onClick={() => setMenuOpen(true)}
            >
              Menu
            </button>
            <Link href="/shop" className="hidden md:block hover:opacity-50 transition-opacity w-fit">Shop Collection</Link>
            <Link href="/arcana-archive" className="hidden md:block hover:opacity-50 transition-opacity w-fit opacity-50">Arcana Archive</Link>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-4 md:top-7">
            <h1 className="text-xl md:text-2xl font-normal hover:opacity-70 transition-opacity">
              PIXIESMITH
            </h1>
          </Link>

          <div className="flex flex-col items-end gap-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium">
            <Link href="/story" className="hidden md:block hover:opacity-50 transition-opacity w-fit">About</Link>
            <Link href="/cart" className="hover:opacity-50 transition-opacity w-fit">Cart (0)</Link>
          </div>

        </div>
      </header>

      <div
        className={`fixed inset-0 z-[90] bg-[#0a0a0a] flex flex-col md:hidden transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <span className="text-xl font-normal text-[#fafafa]" style={{ fontFamily: "var(--font-realm), ui-serif, Georgia, serif" }}>
            PIXIESMITH
          </span>
          <button
            className="text-[10px] uppercase tracking-[0.15em] text-[#fafafa] font-medium hover:opacity-50 transition-opacity"
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
              className={`text-[2.5rem] leading-none font-normal text-[#fafafa] transition-all duration-500 hover:opacity-40 ${
                muted ? "opacity-40" : "opacity-100"
              } ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{
                fontFamily: "var(--font-realm), ui-serif, Georgia, serif",
                transitionDelay: menuOpen ? delay : "0ms",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-6 text-[10px] uppercase tracking-[0.2em] text-[#fafafa]/30 font-medium">
          Wearable symbols of transformation
        </div>
      </div>
    </>
  );
}
