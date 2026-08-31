import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-codi-border bg-codi-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 py-10 lg:flex-row lg:justify-between">
          <Image
            src="/assets/logo_codi.png"
            alt="Codi Academy"
            width={125}
            height={55}
          />

          <div className="flex flex-col items-center gap-1 text-center text-sm text-codi-text-secondary lg:items-end">
            <a
              href="tel:+5532988156599"
              className="transition-colors hover:text-codi-text"
            >
              (32) 9 8815 6599
            </a>
            <a
              href="mailto:adm@codiacademy.com"
              className="transition-colors hover:text-codi-text"
            >
              adm@codiacademy.com
            </a>
            <p className="max-w-md">
              R. Professor Freire 125 - São Mateus, Juiz de Fora - MG, 36025-250
            </p>
          </div>
        </div>

        <div className="border-t border-codi-border py-4">
          <p className="text-center text-xs text-codi-text-secondary">
            © 2024 Codi Academy Treinamentos LTDA
          </p>
        </div>
      </div>
    </footer>
  );
}