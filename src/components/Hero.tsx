import Image from "next/image";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
        <div className="flex max-w-xl flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-codi-text sm:text-5xl">
            Torne-se um Desenvolvedor{" "}
            <span className="text-codi-text-accent">Web Full Stack</span>
          </h1>
          <p className="text-base leading-relaxed text-codi-text-secondary sm:text-lg">
            Aprenda desenvolvimento Front-end e Back-end de forma prática,
            construindo projetos reais do início ao fim.
          </p>
          <div className="pt-2">
            <a
              href="#inscricao"
              className="inline-block rounded-lg bg-codi-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-codi-primary-hover"
            >
              Quero começar
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-codi-border bg-codi-surface lg:aspect-auto lg:min-h-[480px]">
          <Image
            src="/assets/hero-placeholder.jpg"
            alt="Estudante desenvolvendo um projeto web durante o curso full stack"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}