import Link from "next/link";

type LogoProps = {
  onClick?: () => void;
  tone?: "dark" | "light";
};

export function Logo({ onClick, tone = "dark" }: LogoProps) {
  const title = tone === "dark" ? "text-ink-title" : "text-cream-text";
  const subtitle = tone === "dark" ? "text-clay" : "text-warm-body";
  const mark =
    tone === "dark"
      ? "border-gold-deep/50 text-gold-deep bg-cream"
      : "border-gold/45 text-gold bg-ink";

  return (
    <Link
      href="#inicio"
      onClick={onClick}
      aria-label="Eduardo Santos Advocacia — ir para o início"
      className="flex shrink-0 items-center gap-3"
    >
      <span
        className={`flex h-11 w-11 items-center justify-center border ${mark}`}
        aria-hidden="true"
      >
        <span className="font-display text-[1.05rem] font-semibold tracking-tight">
          ES
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-clash text-[0.78rem] font-medium uppercase tracking-[0.22em] ${title}`}
        >
          Eduardo Santos
        </span>
        <span
          className={`mt-1.5 font-clash text-[0.52rem] uppercase tracking-[0.24em] ${subtitle}`}
        >
          Advocacia em Itapoá/SC
        </span>
      </span>
    </Link>
  );
}
