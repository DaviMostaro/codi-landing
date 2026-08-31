"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormSchema } from "@/schemas/enrollment";

type FormData = z.infer<typeof FormSchema>;

const sourceOptions = ["Instagram", "Facebook", "Google", "Indicação", "Outro"];

const inputClassName =
  "h-11 w-full rounded-lg border border-codi-border bg-white px-3.5 text-sm text-codi-text placeholder:text-codi-text-secondary/60 transition-colors focus:border-codi-primary focus:outline-none focus:ring-2 focus:ring-codi-primary/30";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <section id="inscricao" className="bg-codi-dark-bg">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[7fr_6fr] lg:items-center lg:gap-16">
        <div className="flex max-w-xl flex-col">
          <span className="text-sm font-semibold uppercase tracking-widest text-codi-highlight">
            Quer fazer parte?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Dê o primeiro passo para sua carreira como desenvolvedor
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Preencha o formulário abaixo e nossa equipe entra em contato para
            apresentar turmas, valores e os próximos passos da sua formação.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            As vagas de cada turma presencial são limitadas.
          </p>
        </div>

        <div className="rounded-2xl bg-codi-bg p-6 sm:p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-codi-text">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                aria-invalid={errors.name ? true : undefined}
                className={inputClassName}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-codi-text"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                aria-invalid={errors.email ? true : undefined}
                className={inputClassName}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-codi-text"
              >
                Telefone / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                aria-invalid={errors.phone ? true : undefined}
                className={inputClassName}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="city" className="text-sm font-medium text-codi-text">
                Cidade
              </label>
              <input
                id="city"
                type="text"
                placeholder="Sua cidade"
                aria-invalid={errors.city ? true : undefined}
                className={inputClassName}
                {...register("city")}
              />
              {errors.city && (
                <p className="text-xs text-red-500">{errors.city.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="source"
                className="text-sm font-medium text-codi-text"
              >
                Como ficou sabendo do curso?
              </label>
              <select
                id="source"
                defaultValue=""
                aria-invalid={errors.source ? true : undefined}
                className={inputClassName}
                {...register("source")}
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {sourceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.source && (
                <p className="text-xs text-red-500">{errors.source.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-lg bg-codi-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-codi-primary-hover"
            >
              Quero me inscrever
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}