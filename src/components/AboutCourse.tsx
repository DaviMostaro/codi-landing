import { FiFolder, FiLayers, FiPenTool, FiTrendingUp } from "react-icons/fi";

const highlights = [
  {
    title: "Aulas práticas e dinâmicas",
    description:
      "Desde o primeiro dia você cria aplicações reais, com o apoio de instrutores experientes.",
    icon: FiPenTool,
  },
  {
    title: "Projetos reais",
    description:
      "Desafios do mundo real que constroem um portfólio impressionante.",
    icon: FiFolder,
  },
  {
    title: "Abordagem Full Stack",
    description:
      "O ciclo completo do desenvolvimento em um só lugar — do design da interface ao servidor.",
    icon: FiLayers,
  },
  {
    title: "Preparação para o mercado",
    description:
      "Boas práticas e frameworks utilizados pelas grandes empresas de tecnologia.",
    icon: FiTrendingUp,
  },
];

export function AboutCourse() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex max-w-xl flex-col">
          <span className="text-sm font-semibold uppercase tracking-widest text-codi-text-accent">
            Sobre o curso
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-codi-text sm:text-4xl">
            Aprenda a criar aplicações{" "}
            <span className="text-codi-text-accent">do zero ao Full Stack</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-codi-text-secondary sm:text-lg">
            O curso foi pensado para preparar você a construir aplicações
            reais, aprendendo as principais ferramentas e linguagens do
            desenvolvimento web — de sites simples a sistemas robustos.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="flex flex-col">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-codi-border bg-codi-surface text-codi-primary">
                <highlight.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-codi-text">
                {highlight.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-codi-text-secondary">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}