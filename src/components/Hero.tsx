"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/teams.webp",
    alt: "Crick Sharks Club cricket team training session",
    heading: "Welcome to",
    highlight: "Crick Sharks Club",
    sub: "Cricket Academy in Dinnur, Hosur, Tamil Nadu — developing players of all ages.",
  },
  {
    src: "/images/teampic.webp",
    alt: "Crick Sharks Club team photo",
    heading: "Discover Your Potential.",
    highlight: "Develop Your Cricket Skills.",
    sub: "Build your cricketing foundation through skill development, dedicated practice and a passion for the game.",
  },
  {
    src: "/images/team.webp",
    alt: "Crick Sharks Club team photo",
    heading: "Discover Your Potential.",
    highlight: "Develop Your Cricket Skills.",
    sub: "Build your cricketing foundation through skill development, dedicated practice and a passion for the game.",
  },
];

const total = slides.length;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % total), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[560px] overflow-hidden bg-[#071B16]">

      {/* Slides — all rendered, toggled via opacity */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          style={{ opacity: i === index ? 1 : 0, transition: "opacity 0.8s ease" }}
          className="absolute inset-0 pointer-events-none"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#071B16]/65" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-green-400">
            Crick Sharks Club
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {slides[index].heading}
            <span className="mt-2 block text-green-400">{slides[index].highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {slides[index].sub}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Enquire About Training <ArrowRight size={18} />
            </Link>
            <Link
              href="/academy"
              className="rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#071B16]"
            >
              Explore Academy
            </Link>
          </div>
        </div>
      </div>

      {/* Prev */}
      <button
        type="button"
        onClick={() => setIndex((p) => (p - 1 + total) % total)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-green-500"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={() => setIndex((p) => (p + 1) % total)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-green-500"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, i) => (
          <button
            type="button"
            key={slide.src}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index ? "w-9 bg-green-400" : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
