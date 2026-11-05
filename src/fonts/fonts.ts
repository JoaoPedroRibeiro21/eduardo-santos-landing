import localFont from "next/font/local";

export const clashDisplay = localFont({
  src: [
    { path: "./clash-display-400.woff2", weight: "400", style: "normal" },
    { path: "./clash-display-500.woff2", weight: "500", style: "normal" },
    { path: "./clash-display-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-clash-display",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

export const satoshi = localFont({
  src: [
    { path: "./satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "./satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi-face",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});
