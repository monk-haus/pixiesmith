"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const imageWrapper = useRef<HTMLDivElement>(null);
  const textElements = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {

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
              y: -20,
              ease: "none",
              scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "+=40%",
                scrub: true,
              },
            });
          },
        }
      );

      gsap.to(imageWrapper.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">

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

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none z-[1]" />

      <div
        ref={(el) => { if (el) textElements.current[0] = el; }}
        className="absolute top-32 left-6 md:left-12 text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed hidden md:block w-44 opacity-0 z-[2] text-[#fafafa]"
      >
        <span className="block mb-2 font-medium">2 / 78 — The Hermit</span>
        The art of going inward.
      </div>

      <div
        ref={(el) => { if (el) textElements.current[1] = el; }}
        className="absolute bottom-12 md:bottom-20 left-6 md:left-12 text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed w-56 opacity-0 z-[2] text-[#fafafa] hidden md:block"
      >
        Pixiesmith <span className="opacity-50 block mt-1">— Wearable symbols of transformation</span>
      </div>


      <div
        ref={(el) => { if (el) textElements.current[2] = el; }}
        className="absolute bottom-0 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end h-24 z-20 mix-blend-difference opacity-0 pb-8 md:pb-0"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-center text-[#fafafa] mb-4 font-medium opacity-80">Scroll</p>
        <div className="h-10 md:h-16 w-[1px] bg-[#fafafa]/20 overflow-hidden relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#fafafa]"
            style={{ animation: 'slide-down 2s ease-in-out infinite' }}
          />
        </div>
      </div>

      <div
        ref={(el) => { if (el) textElements.current[3] = el; }}
        className="absolute bottom-12 md:bottom-20 right-6 md:right-12 text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed w-44 text-right hidden md:block opacity-0 z-[2] text-[#fafafa]"
      >
        Know thyself.
      </div>

    </section>
  );
}
