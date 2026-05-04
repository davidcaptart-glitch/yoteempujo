"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Somos Imparables", href: "#somos-imparables" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Próximas Salidas", href: "#proximas-salidas" },
  { label: "Colaboradores", href: "#colaboradores" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 select-none">
          <Image
            src="/images/logo.png"
            alt="Yo Te Empujo Imparables"
            width={70}
            height={40}
            className="object-contain"
            priority
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-2xl tracking-tight text-[#0D0D0D] uppercase"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Imparables
            </span>
            <span
              className="text-sm tracking-widest text-[#D42020] uppercase -mt-1"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Yo Te Empujo
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#0D0D0D]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[#D42020] transition-colors duration-200 uppercase tracking-wide text-xs"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center px-5 py-2 border-2 border-[#D42020] text-[#D42020] text-sm font-bold uppercase tracking-widest hover:bg-[#D42020] hover:text-white transition-colors duration-200 rounded-sm"
            style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1rem" }}
          >
            Quiero Participar
          </a>

          <button
            className="lg:hidden p-2 text-[#0D0D0D]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-bold uppercase tracking-wide text-[#0D0D0D] hover:text-[#D42020] transition-colors"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="inline-flex items-center px-5 py-2 bg-[#D42020] text-white text-base font-bold uppercase tracking-widest hover:bg-[#b01a1a] transition-colors rounded-sm"
                style={{ fontFamily: "var(--font-bebas-neue)" }}
                onClick={() => setOpen(false)}
              >
                Quiero Participar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
