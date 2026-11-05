type SealProps = {
  className?: string;
  tone?: "wax" | "ink" | "cream";
  id: string;
};

export function Seal({ className, tone = "wax", id }: SealProps) {
  const color =
    tone === "cream" ? "text-cream" : tone === "ink" ? "text-ink" : "text-wax";

  return (
    <svg
      viewBox="0 0 120 120"
      className={`${className ?? ""} ${color}`}
      role="img"
      aria-label="Selo de inscrição OAB/SC 78.883"
    >
      <defs>
        <path id={`${id}-top`} d="M 15 60 A 45 45 0 0 1 105 60" fill="none" />
        <path
          id={`${id}-bottom`}
          d="M 105 60 A 45 45 0 0 0 15 60"
          fill="none"
        />
      </defs>

      <circle
        cx="60"
        cy="60"
        r="57"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle
        cx="60"
        cy="60"
        r="52.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.45"
      />
      <circle
        cx="60"
        cy="60"
        r="35"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.45"
        opacity="0.65"
      />

      <text
        className="font-sans"
        fontSize="6"
        letterSpacing="1.5"
        fill="currentColor"
      >
        <textPath
          href={`#${id}-top`}
          startOffset="50%"
          textAnchor="middle"
        >
          EDUARDO SANTOS · ADVOCACIA
        </textPath>
      </text>
      <text
        className="font-sans"
        fontSize="5.8"
        letterSpacing="1.3"
        fill="currentColor"
      >
        <textPath
          href={`#${id}-bottom`}
          startOffset="50%"
          textAnchor="middle"
        >
          ITAPOÁ · SANTA CATARINA
        </textPath>
      </text>

      <text
        x="60"
        y="55"
        textAnchor="middle"
        className="font-sans"
        fontSize="5.2"
        letterSpacing="1.1"
        fill="currentColor"
      >
        OAB/SC
      </text>
      <text
        x="60"
        y="69"
        textAnchor="middle"
        className="font-display"
        fontSize="15"
        fontStyle="italic"
        fill="currentColor"
      >
        78.883
      </text>
    </svg>
  );
}
