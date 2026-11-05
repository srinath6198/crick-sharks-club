"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const academyLinks = [
  { label: "Kids Cricket Training", href: "/academy/kids-cricket-training" },
  { label: "Junior Cricket Training", href: "/academy/junior-cricket-training" },
  { label: "Advanced Cricket Training", href: "/academy/advanced-cricket-training" },
  { label: "Professional Coaching", href: "/academy/professional-coaching" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Coaches", href: "/coaches" },
  { label: "Training Programs", href: "/training-programs" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Achievements", href: "/achievements" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const [mobileAcademyOpen, setMobileAcademyOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAcademyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAcademyOpen(false);
    setMobileAcademyOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#071B16] shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
          CRICK <span className="text-green-400">SHARKS</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive(link.href)
                    ? "bg-green-500/20 text-green-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Academy Dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setAcademyOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                isActive("/academy")
                  ? "bg-green-500/20 text-green-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Cricket Academy
              <ChevronDown
                size={15}
                className={`transition-transform ${academyOpen ? "rotate-180" : ""}`}
              />
            </button>

            {academyOpen && (
              <ul className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-white/10 bg-[#0d2b22] py-2 shadow-xl">
                <li>
                  <Link
                    href="/academy"
                    className={`block px-4 py-2 text-sm font-semibold transition ${
                      pathname === "/academy"
                        ? "text-green-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Academy Overview
                  </Link>
                </li>
                <li className="my-1 border-t border-white/10" />
                {academyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-2 text-sm transition ${
                        isActive(link.href)
                          ? "text-green-400"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {navLinks.slice(2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive(link.href)
                    ? "bg-green-500/20 text-green-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#071B16] px-6 pb-6 lg:hidden">
          <ul className="mt-4 space-y-1">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(link.href) ? "text-green-400" : "text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile Academy Accordion */}
            <li>
              <button
                onClick={() => setMobileAcademyOpen((o) => !o)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                  isActive("/academy") ? "text-green-400" : "text-slate-300"
                }`}
              >
                Cricket Academy
                <ChevronDown
                  size={15}
                  className={`transition-transform ${mobileAcademyOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileAcademyOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                  <li>
                    <Link
                      href="/academy"
                      className={`block py-1.5 text-sm ${
                        pathname === "/academy" ? "text-green-400" : "text-slate-400"
                      }`}
                    >
                      Academy Overview
                    </Link>
                  </li>
                  {academyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-1.5 text-sm ${
                          isActive(link.href) ? "text-green-400" : "text-slate-400"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(link.href) ? "text-green-400" : "text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
