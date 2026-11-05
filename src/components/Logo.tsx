import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  onClick?: () => void;
  tone?: "dark" | "light";
  imageClassName?: string;
};

export function Logo({
  onClick,
  tone = "dark",
  imageClassName = "h-8 w-auto xl:h-10",
}: LogoProps) {
  const src =
    tone === "light" ? "/images/logo-light.png" : "/images/logo-dark.png";

  return (
    <Link
      href="#inicio"
      onClick={onClick}
      aria-label="Eduardo dos Santos Advocacia — ir para o início"
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src={src}
        alt=""
        width={566}
        height={83}
        sizes="(max-width: 640px) 200px, (max-width: 1024px) 218px, 273px"
        className={imageClassName}
      />
    </Link>
  );
}
