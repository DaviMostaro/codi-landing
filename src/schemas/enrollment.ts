import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório."),
  email: z
    .string()
    .min(1, "Digite um e-mail válido.")
    .email("Digite um e-mail válido."),
  phone: z.string().min(1, "Telefone é obrigatório."),
  city: z.string().min(1, "Cidade é obrigatória."),
  source: z.string().min(1, "Selecione uma opção."),
});