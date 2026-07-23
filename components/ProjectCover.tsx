import { getTechIcon } from "@/lib/tech-icons";

interface ProjectCoverProps {
  title: string;
  coverTech: string[];
}

/**
 * Project cover art generated from the logos of the programming
 * languages / technologies the project was built with.
 */
export default function ProjectCover({ title, coverTech }: ProjectCoverProps) {
  const icons = coverTech
    .map((name) => ({ name, tech: getTechIcon(name) }))
    .filter((item) => item.tech !== undefined)
    .slice(0, 3);

  const primaryColor = icons[0]?.tech?.color ?? "#0ea5e9";
  const secondaryColor = icons[1]?.tech?.color ?? "#22c55e";

  return (
    <div
      className="relative overflow-hidden h-48 flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${primaryColor}26 0%, ${secondaryColor}26 100%)`,
      }}
      aria-label={`Technologies used in ${title}: ${coverTech.join(", ")}`}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(${primaryColor} 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Tech logos */}
      <div className="relative z-10 flex items-center gap-5">
        {icons.map(({ name, tech }, index) => (
          <div
            key={name}
            className={`flex items-center justify-center rounded-2xl shadow-lg bg-white transition-transform duration-300 group-hover:scale-110 ${
              index === 0 ? "w-20 h-20 p-4" : "w-14 h-14 p-3"
            }`}
            style={{
              boxShadow: `0 8px 24px -6px ${tech!.color}55`,
              transitionDelay: `${index * 50}ms`,
            }}
            title={name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech!.icon}
              alt={name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
