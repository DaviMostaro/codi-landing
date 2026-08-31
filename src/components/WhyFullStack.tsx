import { FiBriefcase, FiColumns, FiEye } from "react-icons/fi";

const reasons = [
  {
    title: "Front-end + Back-end",
    description:
      "Desenvolva tanto a interface que o usuário vê quanto a lógica, os serviços e os dados que fazem a aplicação funcionar.",
    icon: FiColumns,
  },
  {
    title: "Visão completa do projeto",
    description:
      "Compreenda como as partes de uma aplicação se conectam — da interface às APIs e ao banco de dados — e entregue projetos do início ao fim.",
    icon: FiEye,
  },
  {
    title: "Mais possibilidades profissionais",
    description:
      "Amplie seu conjunto de habilidades e esteja pronto para atuar em diferentes etapas do desenvolvimento de produtos digitais.",
    icon: FiBriefcase,
  },
];

export function WhyFullStack() {
  return (
    <section id="curso" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-codi-text-accent">
          Por que Full Stack?
        </span>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-codi-text sm:text-4xl">
          Por que aprender <span className="text-codi-text-accent">Full Stack</span>?
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-codi-text-secondary sm:text-lg">
          Ao aprender Front-end e Back-end, você deixa de enxergar apenas uma
          parte do produto e passa a compreender a aplicação como um todo — da
          interface que o usuário vê até a lógica, os dados e as integrações por
          trás dela.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="flex flex-col rounded-2xl border border-codi-border bg-codi-surface p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-codi-border bg-codi-bg text-codi-primary">
              <reason.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-lg font-semibold text-codi-text">
              {reason.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-codi-text-secondary">
              {reason.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}