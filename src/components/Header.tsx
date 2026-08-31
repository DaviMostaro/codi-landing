"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "O Curso", href: "#curso" },
  { label: "Aprendizado", href: "#aprendizado" },
  { label: "Inscreva-se", href: "#inscricao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-codi-border/50 bg-codi-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" onClick={closeMenu}>
          <Image
            src="/assets/logo_codi.png"
            alt="Codi Academy"
            width={125}
            height={55}
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-codi-text-secondary transition-colors hover:text-codi-text"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#inscricao"
            className="rounded-lg bg-codi-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-codi-primary-hover"
          >
            Quero começar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="rounded-md p-2 text-codi-text transition-colors hover:bg-codi-surface md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="text-2xl leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-codi-border/50 bg-codi-bg px-6 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-codi-text-secondary transition-colors hover:bg-codi-surface hover:text-codi-text"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#inscricao"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-codi-primary px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-codi-primary-hover"
            >
              Quero começar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

