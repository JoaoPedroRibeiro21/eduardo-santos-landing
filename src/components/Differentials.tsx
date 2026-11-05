import { CalendarCheck, HeartHandshake, Lock, MessagesSquare } from "lucide-react";
import { differentials, site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const icons = {
  heartHandshake: HeartHandshake,
  lock: Lock,
  messages: MessagesSquare,
  calendarCheck: CalendarCheck,
} as const;

export function Differentials() {
  return (
    <section
      aria-labelledby="differentials-title"
      className="bg-ink py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block font-clash text-[0.7rem] uppercase tracking-[0.25em] text-gold">
              {differentials.eyebrow}
            </span>
            <h2
              id="differentials-title"
              className="font-display text-3xl leading-tight text-cream-text md:text-5xl"
            >
              {differentials.titleLead}{" "}
              <em className="text-gold">{differentials.titleAccent}</em>{" "}
              {differentials.titleTail}
            </h2>
          </div>
          <p className="max-w-xs font-clash text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-stone md:text-right">
            {site.oab}
            <br />
            {site.location}
          </p>
        </Reveal>

        <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
          {differentials.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                key={item.title}
                delay={index * 0.07}
                y={22}
                className="border-b border-r border-white/10"
              >
                <div className="group h-full p-6 transition-colors duration-300 hover:bg-white/[0.025] md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-quote text-lg italic leading-none text-gold/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="h-4 w-4 text-gold/70 transition-colors duration-300 group-hover:text-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-7 font-display text-xl font-semibold text-cream-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[0.92rem] font-medium leading-relaxed text-warm-text">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
