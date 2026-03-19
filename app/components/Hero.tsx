"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const imageWrapper = useRef<HTMLDivElement>(null);
  const textWrapper = useRef<HTMLDivElement>(null);
  const textElements = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(imageWrapper.current,
      { scale: 1.06, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.2, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(textElements.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1.2,
        onComplete: () => {
          gsap.to(textElements.current, {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: "+=35%",
              scrub: true,
            },
          });
        },
      }
    );

    gsap.to(imageWrapper.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(textWrapper.current, {
      yPercent: 8,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full overflow-hidden bg-[#0a0a0a] mt-10 md:mt-14 h-[calc(100vh-2.5rem)] md:h-[calc(100vh-3.5rem)]">

      <div
        ref={imageWrapper}
        className="absolute inset-0 will-change-transform opacity-0"
      >
        <Image
          src="/Photoshoots - Productions/The Hermit Guatemala Photoshoot 11-25/Bartocci-Fashion-59_websize.jpg"
          alt="The Hermit — Pixiesmith Collection 2/78"
          fill
          className="object-cover object-center hidden md:block"
          priority
          sizes="100vw"
        />
        <Image
          src="/Photoshoots - Productions/The Hermit Guatemala Photoshoot 11-25/Bartocci-Fashion-5_websize.jpg"
          alt="The Hermit — Pixiesmith Collection 2/78"
          fill
          className="object-cover object-center md:hidden"
          priority
          sizes="100vw"
        />
      </div>

      <div
        ref={textWrapper}
        className="absolute inset-0 z-[2] will-change-transform mix-blend-screen"
      >
        <div
          ref={(el) => { textElements.current[0] = el; }}
          className="absolute top-8 md:top-10 left-6 md:left-10 text-[10px] md:text-[11px] uppercase tracking-[0.25em] leading-relaxed hidden md:block w-44 opacity-0 text-[#fafafa]/70 font-medium"
        >
          <span className="block mb-2">2 / 78 — The Hermit</span>
          The art of going inward.
        </div>

        <div
          ref={(el) => { textElements.current[1] = el; }}
          className="absolute bottom-12 left-6 md:left-10 text-[10px] md:text-[11px] uppercase tracking-[0.25em] leading-relaxed hidden md:block opacity-0 text-[#fafafa]/70 font-medium"
        >
          Pixiesmith
          <span className="opacity-50 block mt-1">— Wearable symbols of transformation</span>
        </div>

        <div
          ref={(el) => { textElements.current[2] = el; }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-center text-[#fafafa]/60 mb-4 font-medium">Scroll</p>
          <div className="h-10 md:h-14 w-[1px] bg-[#fafafa]/20 overflow-hidden relative">
            <div
              className="absolute top-0 left-0 w-full h-full bg-[#fafafa]/70"
              style={{ animation: "slide-down 2s ease-in-out infinite" }}
            />
          </div>
        </div>

        <div
          ref={(el) => { textElements.current[3] = el; }}
          className="absolute bottom-12 right-6 md:right-10 text-[10px] md:text-[11px] uppercase tracking-[0.25em] w-44 text-right hidden md:block opacity-0 text-[#fafafa]/70 font-medium"
        >
          Know thyself.
        </div>
      </div>

    </section>
  );
}
