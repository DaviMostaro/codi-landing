import { FiLink, FiMonitor, FiServer } from "react-icons/fi";

const pillars = [
  {
    number: "01",
    title: "Frontend Moderno",
    description:
      "Construa interfaces modernas e interativas com as tecnologias mais usadas no front-end.",
    icon: FiMonitor,
    techs: ["HTML", "CSS", "JavaScript", "React", "Angular"],
  },
  {
    number: "02",
    title: "Backend Poderoso",
    description:
      "Domine a lógica e o funcionamento das aplicações, cuidando de APIs, banco de dados e serviços.",
    icon: FiServer,
    techs: [
      "Node.js",
      "Python",
      "PHP",
      "C#",
      "APIs",
      "Banco de dados",
      "Lógica de negócios",
    ],
  },
  {
    number: "03",
    title: "Integração Total",
    description:
      "Conecte as duas pontas do desenvolvimento para entregar aplicações completas, reais e escaláveis.",
    icon: FiLink,
    techs: [
      "Frontend + Backend",
      "APIs",
      "Aplicações completas",
      "Soluções escaláveis",
    ],
  },
];

export function WhatYouWillLearn() {
  return (
    <section
      id="what-you-will-learn"
      className="mx-auto max-w-7xl px-6 py-20 sm:py-28"
    >
      <div className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-codi-text-accent">
          Aprendizado
        </span>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-codi-text sm:text-4xl">
          O que você vai aprender?
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-codi-text-secondary sm:text-lg">
          O curso percorre as principais etapas do desenvolvimento de aplicações
          web — da construção das interfaces ao back-end e à integração entre as
          partes.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.number}
            className="flex h-full flex-col rounded-2xl border border-codi-border border-t-2 border-t-codi-primary p-8"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-codi-surface text-codi-primary">
                <pillar.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold tracking-widest text-codi-primary">
                {pillar.number}
              </span>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-codi-text">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-codi-text-secondary">
              {pillar.description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {pillar.techs.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-codi-border bg-codi-surface px-3 py-1 text-sm text-codi-text"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}