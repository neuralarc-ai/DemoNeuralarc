"use client";

const cards = [
  {
    bg: "/cardsbg/cardbg-1.png",
    title: "Helium",
    subtitle: "AI for Smarter Business Decisions",
    description:
      "Okra gives you deep insights and analysis on your business idea. Understand potential, spot gaps and make smarter decisions with AI-powered clarity.",
    borderColor: "#444444",
    url: "https://helium.neuralarc.ai/",
  },
  {
    bg: "/cardsbg/cardbg-2.png",
    title: "Lawbit",
    subtitle: "AI for Legal Intelligence",
    description:
      "Create, review and optimize contracts with ease. Lawbit streamlines every step of legal drafting from patent generation to compliance management.",
    borderColor: "#9F7460",
    url: "https://lawbit.neuralpaths.ai/",
  },
  {
    bg: "/cardsbg/cardbg-3.png",
    title: "Gitpik",
    subtitle: "AI for Pitch Deck Analyser",
    description:
      "Gitpeek uses AI to analyze GitHub repos, delivering quick insights and easy code documentation.",
    borderColor: "#93A383",
    url: "https://gitpeek.neuralpaths.ai/",
  },
];

const cards2 = [
  {
    bg: "/cardsbg/cardbg-4.png",
    title: "Spider",
    subtitle: "AI for Pitch Deck Analyser",
    description:
      "Spider reviews your pitch deck with AI-level precision to spot strengths, gaps, and investor-readiness. Get clear, actionable insights to refine your story and win attention.",
    borderColor: "#AE8E98",
    url: "https://spider.neuralarc.ai/",
  },
  {
    bg: "/cardsbg/cardbg-5.png",
    title: "Rovyk",
    subtitle: "AI for Smart Resume Analysis",
    description:
      "Rovyk is your all-in-one AI platform—simple, powerful, and affordable. Create, code, analyze, and explore without switching tools or tabs.",
    borderColor: "#95788F",
    url: "https://rovyk.com/",
  },
];

export default function TabBeta() {
  return (
    <div>
      <div className="w-full flex flex-col gap-8 mt-12 sm:flex-row sm:gap-8 items-center justify-center mx-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative flex flex-col justify-between rounded-[12px] shadow-lg h-full"
            style={{
              backgroundImage: `url(${card.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              maxWidth: 505.77,
              minHeight: 388,
              paddingTop: 48,
              paddingRight: 32,
              paddingBottom: 48,
              paddingLeft: 32,
              opacity: 1,
              borderBottom: `5.64px solid ${card.borderColor}`,
            }}
          >
            <div className="flex flex-col items-start w-full h-full">
              <h4 className="font-medium text-[2rem] leading-[43.52px] tracking-[-0.02em] text-black mb-2">
                {card.title}
              </h4>
              <div className="font-semibold text-[25.79px] leading-[32.24px] tracking-[-0.008em] text-black/70 mb-4">
                {card.subtitle}
              </div>
              <div className="font-normal text-[19.34px] leading-[25.79px] text-[#4A4A4A] mb-8">
                {card.description}
              </div>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-8 py-3 bg-[#2F2C28] text-white rounded-lg font-medium text-lg shadow-[0_4px_0_0_#C6AEA3] border-b-[3px] border-b-[#C6AEA3] hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Try Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4 mt-8 sm:flex-row sm:gap-8 items-center justify-center mx-4">
        {cards2.map((card) => (
          <div
            key={card.title}
            className="relative flex flex-col justify-between rounded-[12px] shadow-lg h-full flex-1 min-w-0"
            style={{
              backgroundImage: `url(${card.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 388,
              paddingTop: 48,
              paddingRight: 32,
              paddingBottom: 48,
              paddingLeft: 32,
              opacity: 1,
              borderBottom: `5.64px solid ${card.borderColor}`,
            }}
          >
            <div className="flex flex-col items-start w-full h-full">
              <h4 className="font-medium text-[2rem] leading-[43.52px] tracking-[-0.02em] text-black mb-2">
                {card.title}
              </h4>
              <div className="font-semibold text-[25.79px] leading-[32.24px] tracking-[-0.008em] text-black/70 mb-4">
                {card.subtitle}
              </div>
              <div className="font-normal text-[19.34px] leading-[25.79px] text-[#4A4A4A] mb-8">
                {card.description}
              </div>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-8 py-3 bg-[#2F2C28] text-white rounded-lg font-medium text-lg shadow-[0_4px_0_0_#C6AEA3] border-b-[3px] border-b-[#C6AEA3] hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Try Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
