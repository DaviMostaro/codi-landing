import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const whatsappLink =
  "https://wa.me/5532988156599?text=Ol%C3%A1%21%20Conheci%20o%20curso%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es.";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[9fr_11fr] lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-codi-border bg-codi-surface">
          <Image
            src="/assets/codi_people.png"
            alt="Equipe da Codi Academy"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-codi-text-accent">
            Fale com a gente
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-codi-text sm:text-4xl">
            Ficou com alguma dúvida?
          </h2>
          <p className="text-base leading-relaxed text-codi-text-secondary sm:text-lg">
            Entre em contato com a gente pelo WhatsApp.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25d366] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1ebd5b] sm:w-auto"
          >
            <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}