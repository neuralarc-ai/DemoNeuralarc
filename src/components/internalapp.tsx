"use client";

const cards = [
  {
    title: "86/C",
    subtitle: "CRM",
    description:
      "86/C turns CSV uploads into leads and helps manage the full sales process, from import to conversion, streamlining workflows and boosting efficiency.",
    gradient: "from-[#CDCDCD] to-[#969696]",
    url: "https://86c.neuralarc.ai/",
  },
  {
    title: "86/F",
    subtitle: "Investor outreach",
    description:
      "86/F is an AI-powered tool that lets you upload investor CSVs, automatically generates smart email drafts tailored to your company, and highlights top potential investors using intelligent analysis",
    gradient: "from-[#D7E0CD] to-[#ADB7A3]",
    main: "#F0ECEB",
    url: "https://86f.neuralarc.ai/",
  },
  {
    title: "86/P",
    subtitle: "Project management tool",
    description:
      "86/P helps teams plan, track, and execute work with to-do lists, admin task assignment, multi-user collaboration, and project overviews—plus built-in repo integration for easier code and task management.",
    gradient: "from-[#DCCAC1] to-[#B18D7B]",
    main: "#F3F4EF",
    url: "https://86p.neuralarc.ai/",
  },
];

function renderStyledTitle(title: string) {
  const match = title.match(/^(86)(\/\w)$/);
  if (!match) return title;
  return (
    <>
      <span
        style={{
          fontFamily: "Fustat, sans-serif",
          fontWeight: 500,
          fontSize: 40,
          lineHeight: "43.52px",
          letterSpacing: "-0.02em",
          verticalAlign: "middle",
        }}
        className="font-medium text-[40px] text-black leading-[43.52px] tracking-[-0.02em]"
      >
        {match[1]}
      </span>
      <span
        style={{
          fontFamily: "Fustat, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          lineHeight: "43.52px",
          letterSpacing: "-0.02em",
          verticalAlign: "middle",
        }}
        className="font-bold text-[32px] text-black leading-[43.52px] tracking-[-0.02em] ml-1"
      >
        {match[2]}
      </span>
    </>
  );
}

export default function InternalApp() {
  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 mt-8 items-stretch justify-center">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`relative flex flex-col rounded-[12px] shadow-lg w-full h-full p-8 bg-gradient-to-br ${card.gradient}`}
        >
          <div className="flex flex-col items-start w-full h-full flex-1">
            <h4 className="mb-2">
              {renderStyledTitle(card.title)}
            </h4>
            <div className="font-semibold text-[1.5rem] leading-[2rem] tracking-[-0.008em] text-[#00000080] mb-4">
              {card.subtitle}
            </div>
            <div className="font-normal text-[1.1rem] leading-[1.7rem] text-black mb-2">
              {card.description}
            </div>
            <a
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-8 py-3 bg-[#2F2C28] text-white rounded-lg font-medium text-lg shadow-[0_4px_0_0_#C6AEA3] border-b-[3px] border-b-[#C6AEA3] hover:-translate-y-1 transition-all flex items-center gap-2 w-fit"
            >
              View
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24v0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
