import Link from "next/link";

type LogoProps = {
  onClick?: () => void;
  tone?: "ink" | "cream";
};

export function Logo({ onClick, tone = "ink" }: LogoProps) {
  return (
    <Link
      href="#inicio"
      onClick={onClick}
      aria-label="Eduardo Santos Advocacia — ir para o início"
      className="group flex shrink-0 flex-col leading-none"
    >
      <span
        className={`font-display text-[1.32rem] tracking-[-0.015em] ${
          tone === "ink" ? "text-ink" : "text-cream"
        }`}
      >
        Eduardo Santos
      </span>
      <span
        className={`mt-1 font-sans text-[0.62rem] tracking-[0.08em] ${
          tone === "ink" ? "text-graphite" : "text-cream-muted"
        }`}
      >
        Advocacia em Itapoá/SC
      </span>
    </Link>
  );
}
